import * as React from "react";

export default class VideoWithOverlay extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { srcObject } = nextProps;
    if (srcObject && this.props.srcObject !== srcObject) {
      this.video.srcObject = srcObject;
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.src !== this.props.src;
  }

  componentDidUpdate() {
    this.onChange();
  }

  componentDidMount() {
    this.onChange();
  }

  onChange = () => {
    const { video, overlay, isLoaded } = this;
    if (video && overlay && isLoaded) {
      const { width, height } = this.video.getBoundingClientRect();
      this.overlay.width = width;
      this.overlay.height = height;
      this.props.onLoaded({ mediaElement: video, overlay });
    }
  };

  onVideoRef = el => {
    this.video = el;
    if (this.props.onVideoRef) {
      this.props.onVideoRef();
    }
    this.onChange();
  };

  onCanvasRef = el => {
    this.overlay = el;
    this.onChange();
  };

  onPlay = () => {
    this.isLoaded = true;
    this.onChange();
  };

  render() {
    return (
      <div style={{ position: "relative" }}>
        <video
          muted
          autoPlay
          style={{ ...this.props.videoStyle, width: '500px' }}
          ref={this.onVideoRef}
          onPlay={this.onPlay}
          src={this.props.src}
          className="video-element"
        />
        <canvas
          style={{ position: "absolute", top: 0, left: 0, width: '500px' }}
          ref={this.onCanvasRef}
        />
      </div>
    );
  }
}
