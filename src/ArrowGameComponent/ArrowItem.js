import React from "react";

import { EnumArrowType } from "../const";

import UpArrow from "../assets/upArrow.png";
import DownArrow from "../assets/downArrow.png";
import LeftArrow from "../assets/leftArrow.png";
import RightArrow from "../assets/rightArrow.png";

import { IMAGE_SIZE } from "../components/ExplosionArrow";

class ArrowItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bottom: -IMAGE_SIZE,
      scale: 1
    };
  }

  componentDidUpdate(prevProps) {
    const { isStart, distance, moveTime } = this.props;
    if (isStart && !prevProps.isStart) {
      this.setState(
        {
          bottom: distance
        },
        () => setTimeout(this._onReachTop, moveTime - 500)
      );
    }
  }

  _onReachTop = async () => {
    const isDisappear = await this.props.onReachTop();
    if (isDisappear) {
      this.setState({
        scale: 0
      });
    }
  };

  getImageSource = () => {
    switch (this.props.type) {
      case EnumArrowType.UP:
        return UpArrow;
      case EnumArrowType.LEFT:
        return LeftArrow;
      case EnumArrowType.RIGHT:
        return RightArrow;
      default:
        return DownArrow;
    }
  };

  render() {
    const { moveTime } = this.props;
    const { bottom, scale } = this.state;
    return (
      <img
        src={this.getImageSource()}
        alt="up-icon"
        className={`arrow-item`}
        style={{
          transition: `bottom ${moveTime /
            1000}s linear, opacity 0.2s, transform 0.2s`,
          bottom,
          transform: `scale(${scale})`,
          opacity: scale,
          width: IMAGE_SIZE,
          height: IMAGE_SIZE
        }}
      />
    );
  }
}

export default ArrowItem;
