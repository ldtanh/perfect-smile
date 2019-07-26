import * as React from "react";
import * as faceapi from "face-api.js";
import VideoWithOverlay from "./VideoWithOverlay";
import './styles.css';

const MAX_FRAME_LENGTH = 4;
const EPS = 0.001;

export default class Webcam extends React.PureComponent {
    state = {
        listFrames: [],
        faceDetectionOptions: new faceapi.TinyFaceDetectorOptions(),
        isFirstFaceDetected: false
    };

    loadFaceDetector = async () => {
        const faceDetector = faceapi.nets.tinyFaceDetector;
        if (!faceDetector.isLoaded) {
            console.log('Reload Model: ', faceDetector);
            faceDetector.loadFromUri("./models");
        }
        this.setState({ isFaceDetectorLoaded: true });
    };

    async loadModels() {
        await Promise.all([
            faceapi.nets.faceExpressionNet.loadFromUri('./models'),
            faceapi.nets.tinyFaceDetector.loadFromUri('./models')
        ]);
        await this.loadFaceDetector();
    }

    componentDidMount() {
        this.loadModels();
    }

    runFaceRecognition = async () => {
        const { mediaElement, overlay, faceDetectionOptions } = this.state;
        if (!mediaElement || !overlay) {
            return;
        }
        const result = await faceapi
            .detectSingleFace(mediaElement, faceDetectionOptions)
            .withFaceExpressions();
        if (result) {
            this.onReceivedNextFrame(result);
        } else {
            this.setState({
                somethingDummy: Math.random()
            });
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

    onReceivedNextFrame = result => {
        const { detection, expressions } = result;
        const { box } = detection;
        const { x, y } = box;
        if (!this.checkLastMovingFrame(x, y)) {
            return;
        }
        const { listFrames } = this.state;
        if (listFrames.length === MAX_FRAME_LENGTH) {
            // Test to get direction:
            const { x: _x, y: _y } = listFrames[0];
            const xDistance = Math.abs(x - _x),
                yDistance = Math.abs(y - _y);
            if (xDistance > yDistance) {
                console.log(x < _x ? "Right" : "Left");
            } else {
                console.log(y < _y ? "Up" : "Down");
            }
            console.log('Expression Detected: ', expressions);
            this.setState({
                listFrames: [
                    {
                        x,
                        y
                    }
                ]
            });
        } else {
            listFrames.push({
                x,
                y
            });
            this.setState({
                listFrames
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
