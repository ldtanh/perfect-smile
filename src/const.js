export const EnumArrowType = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right'
};

export const LEVEL = {
  UNSET: 0,
  EASY: 1,
  MEDIUM: 2,
  HARD: 3,
};

const CONST_TIME = 2000;

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
