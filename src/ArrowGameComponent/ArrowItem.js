import React from "react";

import UpIcon from "../asset/up_icon.png";

class ArrowItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bottom: -30,
      scale: 1
    };
  }

  componentDidUpdate(prevProps) {
    const { isStart, distance, onReachTop, moveTime } = this.props;
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

  render() {
    const { moveTime } = this.props;
    const { bottom, scale } = this.state;
    return (
      <img
        src={UpIcon}
        alt="up-icon"
        className={`arrow-item`}
        style={{
          transition: `bottom ${moveTime / 1000}s linear, opacity 0.2s, transform 0.2s`,
          bottom,
          transform: `scale(${scale})`,
          opacity: scale
        }}
      />
    );
  }
}

export default ArrowItem;
