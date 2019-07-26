import React from "react";

import { EnumArrowType } from "../const";

import ArrowIcon from "../assets/itg_arrow_good_400x400.png";

class ArrowItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bottom: -30,
      scale: 1
    };
  }

  componentDidUpdate(prevProps) {
    const { isStart, distance, moveTime } = this.props;
    if (isStart && !prevProps.isStart) {
      this.setState(
        {
          bottom: distance + 100
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

  getRotateAngle = () => {
    switch (this.props.type) {
      case EnumArrowType.UP:
        return 180;
      case EnumArrowType.LEFT:
        return 90;
      case EnumArrowType.RIGHT:
        return -90;
      default:
        return 0;
    }
  };

  render() {
    const { moveTime } = this.props;
    const { bottom, scale } = this.state;
    const rotate = `rotate(${this.getRotateAngle()}deg)`;
    return (
      <img
        src={ArrowIcon}
        alt="up-icon"
        className={`arrow-item`}
        style={{
          transition: `bottom ${moveTime /
            1000}s linear, opacity 0.2s, transform 0.2s`,
          bottom,
          transform: `scale(${scale}) ${rotate}`,
          opacity: scale
        }}
      />
    );
  }
}

export default ArrowItem;
