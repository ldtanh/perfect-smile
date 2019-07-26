export const EnumArrowType = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right'
};

const CONST_TIME = 5000;

export const MOVE_TIME = 5000;

export const ARROWS = [
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
