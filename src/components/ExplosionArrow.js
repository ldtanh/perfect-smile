import React, { Component } from "react";
import { SpriteAnimation } from "./spriteAnimation";
import Vortex from "./spritesheet.png"; // Tell Webpack this JS file uses this image
import ArrowIcon from "./itg_arrow_good_400x400.png"; // Tell Webpack this JS file uses this image

export const EnumDirection = {
  TOP: "top",
  LEFT: "left",
  RIGHT: "right",
  BOTTOM: "bottom"
};

const IMAGE_STYLE = { width: 30, height: 30 };
const EXPLOSION_STYLE = {
  width: 50,
  height: 50,
  position: "relative",
  top: -30
};
class ExplosionArrow extends Component {
  componentDidMount() {
    this._animationOne = new SpriteAnimation({
      element: `image-${this.props.direction}`,
      frames: 60,
      columns: 10,
      rows: 9,
      iterations: 1
    });
  }

  getRotateAngle = () => {
    switch (this.props.direction) {
      case EnumDirection.TOP:
        return 180;
      case EnumDirection.LEFT:
        return 90;
      case EnumDirection.RIGHT:
        return -90;
      default:
        return 0;
    }
  };

  boom = () => {
    this._animationOne.animateSprite();
  };

  render() {
    return (
      <div>
        <div>
          <img
            src={ArrowIcon}
            style={{
              ...IMAGE_STYLE,
              transform: `rotate(${this.getRotateAngle()}deg)`
            }}
          />
        </div>
        <div
          style={EXPLOSION_STYLE}
          className={`image-${this.props.direction}`}
          data-animation-src={Vortex}
        ></div>
      </div>
    );
  }
}

export default ExplosionArrow;
