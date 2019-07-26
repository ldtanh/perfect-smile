import React from "react";

import ArrowItem from "./ArrowItem";
import {
  COOL_SCORE,
  EnumArrowType,
  PERFECT_SCORE,
  TIMEOUT_DETECT_MOVEMENT
} from "../const";
import ExplosionArrow, { EnumDirection } from "../components/ExplosionArrow";

import "./styles.scss";

// props:
// moveTime: number -> how many second to reach top
// arrows: Array<{ type: string, nextArrowStartTime: number }>
// state:
// data: Array<>
class ArrowGameComponent extends React.Component {
  leftRef = React.createRef();
  downRef = React.createRef();
  upRef = React.createRef();
  rightRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      data: this._preProcessingData(this.props.arrows),
      isAnimatedMap: {} // map arrow id -> boolean
    };
    setTimeout(() => this.forceUpdate(), 100);
    setTimeout(this.start, 500);
  }

  _preProcessingData = () => {
    const { arrows } = this.props;
    let timeout = 0;
    return arrows.map((arrowData, index) => {
      const response = {
        id: index,
        type: arrowData.type,
        timeoutStartTime: timeout
      };
      timeout += arrowData.nextArrowStartTime;
      return response;
    });
  };

  start = () => {
    const { data } = this.state;
    data.forEach(arrowItem => {
      setTimeout(
        () => this.animateArrow(arrowItem),
        arrowItem.timeoutStartTime
      );
    });
  };

  animateArrow = arrowItem => {
    this.setState({
      isAnimatedMap: {
        ...this.state.isAnimatedMap,
        [arrowItem.id]: true
      }
    });
  };

  handleBoom = type => {
    switch (type) {
      case EnumArrowType.UP: {
        this.upRef.current.boom();
        break;
      }
      case EnumArrowType.DOWN: {
        this.downRef.current.boom();
        break;
      }
      case EnumArrowType.LEFT: {
        this.leftRef.current.boom();
        break;
      }
      case EnumArrowType.RIGHT: {
        this.rightRef.current.boom();
        break;
      }
    }
  };

  handleReachTop = async (id, type) => {
    const currentTime = Date.now();
    const {
      isValid,
      happyValue
    } = await this.props.webcam.current.checkDirectionWithTimeout(
      type,
      TIMEOUT_DETECT_MOVEMENT
    );
    console.log(isValid);
    if (isValid) {
      const detectTime = Date.now();
      const elapsedTime = detectTime - currentTime;
      if (
        elapsedTime <= TIMEOUT_DETECT_MOVEMENT / 3 ||
        elapsedTime > (TIMEOUT_DETECT_MOVEMENT * 2) / 3
      ) {
        this.props.onScoreChange(COOL_SCORE);
      } else {
        this.props.onScoreChange(PERFECT_SCORE);
      }
      this.handleBoom(type);
    }
    return isValid;
  };

  render() {
    const { data, isAnimatedMap } = this.state;
    const { moveTime } = this.props;
    const element = document.getElementById("arrow-game");
    const upArrowData = data.filter(
      arrowItem => arrowItem.type === EnumArrowType.UP
    );
    const downArrowData = data.filter(
      arrowItem => arrowItem.type === EnumArrowType.DOWN
    );
    const leftArrowData = data.filter(
      arrowItem => arrowItem.type === EnumArrowType.LEFT
    );
    const rightArrowData = data.filter(
      arrowItem => arrowItem.type === EnumArrowType.RIGHT
    );
    return (
      <div className="arrow-game-wrapper" id="arrow-game">
        <div className="arrow-holder-wrapper">
          <ExplosionArrow ref={this.leftRef} direction={EnumDirection.LEFT} />
          <ExplosionArrow ref={this.downRef} direction={EnumDirection.BOTTOM} />
          <ExplosionArrow ref={this.upRef} direction={EnumDirection.TOP} />
          <ExplosionArrow ref={this.rightRef} direction={EnumDirection.RIGHT} />
        </div>
        <div className="arrow-space">
          <div className="arrow-move-container">
            {element && (
              <React.Fragment>
                <div className="arrow-move-wrapper">
                  {leftArrowData.map(arrowItem => (
                    <ArrowItem
                      key={arrowItem.id}
                      type={arrowItem.type}
                      isStart={!!isAnimatedMap[arrowItem.id]}
                      moveTime={moveTime}
                      onReachTop={() =>
                        this.handleReachTop(arrowItem.id, arrowItem.type)
                      }
                      distance={element.clientHeight}
                    />
                  ))}
                </div>
                <div className="arrow-move-wrapper">
                  {downArrowData.map(arrowItem => (
                    <ArrowItem
                      key={arrowItem.id}
                      type={arrowItem.type}
                      isStart={!!isAnimatedMap[arrowItem.id]}
                      moveTime={moveTime}
                      onReachTop={() =>
                        this.handleReachTop(arrowItem.id, arrowItem.type)
                      }
                      distance={element.clientHeight}
                    />
                  ))}
                </div>
                <div className="arrow-move-wrapper">
                  {upArrowData.map(arrowItem => (
                    <ArrowItem
                      key={arrowItem.id}
                      type={arrowItem.type}
                      isStart={!!isAnimatedMap[arrowItem.id]}
                      moveTime={moveTime}
                      onReachTop={() =>
                        this.handleReachTop(arrowItem.id, arrowItem.type)
                      }
                      distance={element.clientHeight}
                    />
                  ))}
                </div>
                <div className="arrow-move-wrapper">
                  {rightArrowData.map(arrowItem => (
                    <ArrowItem
                      key={arrowItem.id}
                      type={arrowItem.type}
                      isStart={!!isAnimatedMap[arrowItem.id]}
                      moveTime={moveTime}
                      onReachTop={() =>
                        this.handleReachTop(arrowItem.id, arrowItem.type)
                      }
                      distance={element.clientHeight}
                    />
                  ))}
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ArrowGameComponent;
