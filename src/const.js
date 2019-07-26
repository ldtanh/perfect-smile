export const EnumArrowType = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right"
};

export const LEVEL = {
  UNSET: 0,
  EASY: 'https://www.youtube.com/embed/IHNzOHi8sJs?autoplay=1&controls=0&showinfo=0&autohide=1&start=2&loop=1',
  MEDIUM: 'https://www.youtube.com/embed/mAKsZ26SabQ?autoplay=1&controls=0&showinfo=0&autohide=1&start=30&loop=1',
  HARD: 'https://www.youtube.com/embed/i0p1bmr0EmE?autoplay=1&controls=0&showinfo=0&autohide=1&start=05&loop=1',
};

const CONST_TIME = 5000;

const MIN_BETWEEN_ARROW = 3000;

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

export const TIMEOUT_DETECT_MOVEMENT = 1500;

export const PERFECT_SCORE = 500;
export const COOL_SCORE = 300;
