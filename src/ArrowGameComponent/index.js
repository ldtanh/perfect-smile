import React from "react";

import ArrowItem from "./ArrowItem";
import "./styles.scss";
import { EnumArrowType } from "../const";
import ExplosionArrow, { EnumDirection } from "../components/ExplosionArrow";

// props:
// moveTime: number -> how many second to reach top
// arrows: Array<{ type: string, nextArrowStartTime: number }>
// state:
// data: Array<>
class ArrowGameComponent extends React.Component {
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

  handleReachTop = async id => {
    console.log(id);
    return Math.random() < 0.5;
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
          <ExplosionArrow direction={EnumDirection.LEFT} />
          <ExplosionArrow direction={EnumDirection.BOTTOM} />
          <ExplosionArrow direction={EnumDirection.TOP} />
          <ExplosionArrow direction={EnumDirection.RIGHT} />
        </div>
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
                    onReachTop={() => this.handleReachTop(arrowItem.id)}
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
                    onReachTop={() => this.handleReachTop(arrowItem.id)}
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
                    onReachTop={() => this.handleReachTop(arrowItem.id)}
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
                    onReachTop={() => this.handleReachTop(arrowItem.id)}
                    distance={element.clientHeight}
                  />
                ))}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default ArrowGameComponent;
