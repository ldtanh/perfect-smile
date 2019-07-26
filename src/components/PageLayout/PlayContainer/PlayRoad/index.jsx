import React from "react";

import ArrowGameComponent from "../../../../ArrowGameComponent";
import { ARROWS, MOVE_TIME } from "../../../../const";

import "./styles.css";

const PlayRoad = React.memo(() => (
  <div className="play-road">
    <ArrowGameComponent moveTime={MOVE_TIME} arrows={ARROWS} />
  </div>
));

export default PlayRoad;
