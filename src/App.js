import React from "react";

import ArrowGameComponent from "./ArrowGameComponent";
import { EnumArrowType } from "./const";

import "./App.css";

const CONST_TIME = 5000;
const MOVE_TIME = 5000;
const ARROWS = [
  {
    type: EnumArrowType.UP,
    nextArrowStartTime: Math.max(Math.random() * CONST_TIME, 200)
  },
  {
    type: EnumArrowType.DOWN,
    nextArrowStartTime: Math.max(Math.random() * CONST_TIME, 200)
  },
  {
    type: EnumArrowType.LEFT,
    nextArrowStartTime: Math.max(Math.random() * CONST_TIME, 200)
  },
  {
    type: EnumArrowType.RIGHT,
    nextArrowStartTime: Math.max(Math.random() * CONST_TIME, 200)
  },
  {
    type: EnumArrowType.UP,
    nextArrowStartTime: Math.max(Math.random() * CONST_TIME, 200)
  },
  {
    type: EnumArrowType.UP,
    nextArrowStartTime: Math.max(Math.random() * CONST_TIME, 200)
  },
  {
    type: EnumArrowType.DOWN,
    nextArrowStartTime: Math.max(Math.random() * CONST_TIME, 200)
  },
  {
    type: EnumArrowType.UP,
    nextArrowStartTime: Math.max(Math.random() * CONST_TIME, 200)
  },
  {
    type: EnumArrowType.UP,
    nextArrowStartTime: Math.max(Math.random() * CONST_TIME, 200)
  },
  {
    type: EnumArrowType.UP,
    nextArrowStartTime: Math.max(Math.random() * CONST_TIME, 200)
  }
];

function App() {
  return (
    <div className="App">
      <ArrowGameComponent moveTime={MOVE_TIME} arrows={ARROWS} />
    </div>
  );
}

export default App;
