export const EnumArrowType = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right"
};

export const LEVEL = {
  UNSET: 0,
  EASY: 1,
  MEDIUM: 2,
  HARD: 3,
};

const CONST_TIME = 2000;

const MIN_BETWEEN_ARROW = 2000;

export const MOVE_TIME = 5000;

const dummyArray = [...Array(500)];
const randomType = () => {
  const randVal = Math.random();
  if (randVal < 0.25) {
    return EnumArrowType.UP;
  } else if (randVal < 0.5) {
    return EnumArrowType.DOWN;
  } else if (randVal < 0.75) {
    return EnumArrowType.LEFT;
  }
  return EnumArrowType.RIGHT;
};

export const ARROWS = dummyArray.map(() => ({
  type: randomType(),
  nextArrowStartTime: Math.max(Math.random() * CONST_TIME, MIN_BETWEEN_ARROW)
}));

export const TIMEOUT_DETECT_MOVEMENT = 1000;

export const PERFECT_SCORE = 500;
export const COOL_SCORE = 300;
