import React from 'react';
import './App.css';
import PageLayout from "./components/PageLayout";

import { EnumArrowType } from "./const";

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
      <PageLayout />
    </div>
  );
}

export default App;
