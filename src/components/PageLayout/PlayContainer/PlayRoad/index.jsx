import React from "react";

import ArrowGameComponent from "../../../../ArrowGameComponent";
import { ARROWS, MOVE_TIME } from "../../../../const";

import "./styles.css";

const PlayRoad = React.memo(({ onScoreChange, onHappyChange, onScoreTypeDisplay, webcam, gameRef }) => (
  <div className="play-road">
    <ArrowGameComponent
      moveTime={MOVE_TIME}
      arrows={ARROWS}
      onScoreChange={onScoreChange}
      onHappyChange={onHappyChange}
      onScoreTypeDisplay={onScoreTypeDisplay}
      webcam={webcam}
      ref={gameRef}
    />
    <div className="play-road-bg" />
  </div>
));

export default PlayRoad;
