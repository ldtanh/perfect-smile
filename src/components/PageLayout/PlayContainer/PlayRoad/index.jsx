import React, { PureComponent } from "react";

import ArrowGameComponent from "../../../../ArrowGameComponent";
import { ARROWS, MOVE_TIME } from "../../../../const";

import "./styles.css";

class PlayRoad extends PureComponent {
  constructor(props) {
    super(props);
    this.arrow = ARROWS(props.level);
  }

  render() {
    let {
      level,
      onScoreChange,
      onHappyChange,
      onScoreTypeDisplay,
      webcam,
      gameRef
    } = this.props;
    return (
      <div className="play-road">
        <ArrowGameComponent
          level={level}
          moveTime={MOVE_TIME(level)}
          arrows={this.arrow}
          onScoreChange={onScoreChange}
          onHappyChange={onHappyChange}
          onScoreTypeDisplay={onScoreTypeDisplay}
          webcam={webcam}
          ref={gameRef}
        />
        <div className="play-road-bg" />
      </div>
    );
  }
}

export default PlayRoad;
