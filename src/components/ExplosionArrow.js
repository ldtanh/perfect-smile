import React, { Component } from "react";
import { SpriteAnimation } from "./spriteAnimation";
import RightExplosionIcon from "./spritesheet.png"; // Tell Webpack this JS file uses this image
import ArrowIcon from "./itg_arrow_good_400x400.png"; // Tell Webpack this JS file uses this image
import TopExplosionIcon from "../assets/topExplosion.png";
import BottomExplosionIcon from "../assets/bottomExplosion.png";
import LeftExplosionIcon from "../assets/leftExplosion.png";

export const EnumDirection = {
  TOP: "top",
  LEFT: "left",
  RIGHT: "right",
  BOTTOM: "bottom"
};

export const IMAGE_SIZE = 80;

const IMAGE_STYLE = { width: IMAGE_SIZE, height: IMAGE_SIZE };
const EXPLOSION_STYLE = {
  width: IMAGE_SIZE + 80,
  height: IMAGE_SIZE + 80,
  position: "relative",
  top: -(IMAGE_SIZE + 40)
};
class ExplosionArrow extends Component {
  componentDidMount() {
    this._animationOne = new SpriteAnimation({
      element: `image-${this.props.direction}`,
      frames: 120,
      columns: 10,
      duration: 300,
      rows: this.getRowOfSprite(),
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

  getExplosionIcon = () => {
    switch (this.props.direction) {
      case EnumDirection.TOP:
        return TopExplosionIcon;
      case EnumDirection.LEFT:
        return LeftExplosionIcon;
      case EnumDirection.RIGHT:
        return RightExplosionIcon;
      default:
        return BottomExplosionIcon;
    }
  };

  getRowOfSprite = () => {
    switch (this.props.direction) {
      case EnumDirection.TOP:
        return 7;
      case EnumDirection.LEFT:
        return 9;
      case EnumDirection.RIGHT:
        return 9;
      default:
        return 8;
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
          data-animation-src={this.getExplosionIcon()}
        ></div>
      </div>
    );
  }
}

export default ExplosionArrow;
