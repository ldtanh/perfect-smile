import * as React from "react";
import * as faceapi from "face-api.js";
import { debounce } from "lodash";

import VideoWithOverlay from "./VideoWithOverlay";
import "./styles.css";
import DeferredPromise from "../../../DefferedPromise";
import { EnumArrowType } from "../../../../const";

const MAX_FRAME_LENGTH = 4;
const EPS = 0.1;
const HAPPY_THRESHOLD = 0.5;

export default class Webcam extends React.Component {
  state = {
    listFrames: [],
    faceDetectionOptions: new faceapi.TinyFaceDetectorOptions(),
    isFirstFaceDetected: false
  };

  listComingDirection = [];
  directionId = 0;
  isFirstFaceDetected = true;

  loadFaceDetector = async () => {
    const faceDetector = faceapi.nets.tinyFaceDetector;
    if (!faceDetector.isLoaded) {
      console.log("Reload Model: ", faceDetector);
      faceDetector.loadFromUri("./assets/models");
    }
    this.setState({ isFaceDetectorLoaded: true });
  };

  async loadModels() {
    await Promise.all([
      faceapi.nets.faceExpressionNet.loadFromUri("http://a86a4041.ngrok.io/models/"),
      faceapi.nets.tinyFaceDetector.loadFromUri("http://a86a4041.ngrok.io/models/")
    ]);
    await this.loadFaceDetector();
  }

  componentDidMount() {
    this.loadModels();
  }

  runFaceRecognition = async () => {
    const { mediaElement, overlay, faceDetectionOptions } = this.state;
    if (!mediaElement || !overlay) {
      // console.log("here");
      return;
    }
    const result = await faceapi
      .detectSingleFace(mediaElement, faceDetectionOptions)
      .withFaceExpressions();
    if (result) {
      if (this.isFirstFaceDetected) {
        this.props.gameRef.current.start();
        this.isFirstFaceDetected = false;
      }
      this.onReceivedNextFrame(result);
    } else {
      this.runFaceRecognition();
    }
  };

  componentDidUpdate() {
    this.runFaceRecognition();
  }

  onVideoRef = async () => {
    try {
      const srcObject = await navigator.mediaDevices.getUserMedia({
        video: {}
      });
      this.setState({ srcObject });
    } catch (err) {
      this.setState({ error: err.toString() });
    }
  };

  checkLastMovingFrame = (x, y) => {
    const { listFrames } = this.state;
    if (listFrames.length < 1) return true;
    const { x: _x, y: _y } = listFrames[listFrames.length - 1];
    if (Math.abs(x - _x) < EPS) return false;
    if (Math.abs(y - _y) < EPS) return false;
    return true;
  };

  checkDirectionWithTimeout = (type, timeout) => {
    const { resolve, promise } = new DeferredPromise();
    const thisId = ++this.directionId;
    setTimeout(() => {
      this.listComingDirection = this.listComingDirection.filter(
        item => item.id !== thisId
      );
      resolve({
        isValid: false,
        happyValue: null
      });
    }, timeout);
    this.listComingDirection.push({
      resolve,
      type,
      id: thisId
    });
    return promise;
  };

  onReceivedNextFrame = result => {
    const { detection, expressions } = result;
    const { happy } = expressions;
    if (happy < HAPPY_THRESHOLD) {
      // Not enough happy!
      // console.log(`Unhappy!!! Rate: ${happy * 100} %`);
    }
    const { box } = detection;
    const { x, y } = box;
    if (!this.checkLastMovingFrame(x, y)) {
      this.runFaceRecognition();
      return;
    }
    const { listFrames } = this.state;
    if (listFrames.length === MAX_FRAME_LENGTH) {
      // Test to get direction:
      const { x: _x, y: _y } = listFrames[0];
      const xDistance = Math.abs(x - _x),
        yDistance = Math.abs(y - _y);
      let type = EnumArrowType.LEFT;
      if (xDistance > yDistance) {
        // console.log(x < _x ? "Right" : "Left");
        if (x < _x) {
          type = EnumArrowType.RIGHT;
        }
      } else {
        // console.log(y < _y ? "Up" : "Down");
        if (y < _y) type = EnumArrowType.UP;
        else type = EnumArrowType.DOWN;
      }
      const rightDirections = this.listComingDirection.filter(
        item => item.type === type
      );
      if (rightDirections.length > 0) {
        rightDirections[0].resolve({
          isValid: true,
          happyValue: happy
        });
        this.listComingDirection = this.listComingDirection.filter(
          item => item.id !== rightDirections[0].id
        );
      }
      this.setState({
        listFrames: [
          {
            x,
            y
          }
        ]
      });
    } else {
      this.setState({
        listFrames: [
          ...listFrames,
          {
            x,
            y
          }
        ]
      });
    }
  };

  render() {
    if (this.state.error) {
      return (
        <div style={{ background: "red", color: "white" }}>
          <h3> Error occured while requesting webcam access: </h3>
          <p> {this.state.error} </p>
        </div>
      );
    }

    return (
      <div className="webcam-container">
        <VideoWithOverlay
          srcObject={this.state.srcObject}
          onLoaded={refs => this.setState(refs)}
          onVideoRef={this.onVideoRef}
          onReceivedNextFrame={this.onReceivedNextFrame}
        />
      </div>
    );
  }
}
