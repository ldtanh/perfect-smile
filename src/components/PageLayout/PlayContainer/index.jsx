import React from "react";
import PlayTime from "./PlayTime";
import Webcam from "./Webcam";
import PlayRoad from "./PlayRoad";
import BackButton from "./BackButton";
import HappyBar from "./HappyBar";

class PlayContainer extends React.Component {
  webcamRef = React.createRef();
  gameRef = React.createRef();

  state = {
    score: 0,
    happy: 20,
  };

  handleScoreChange = add =>
        this.setState({ score: this.state.score + add });

  handleHappyChange = happy =>
        this.setState({ happy });

  render() {
    const { level, onStop } = this.props;
    const { happy, score } = this.state;

    return (
      <div className="play-container" onClick={() => this.handleHappyChange(Math.floor((Math.random() * 100) + 1))}>
        <PlayTime />
        <PlayRoad level={level} onScoreChange={this.handleScoreChange} webcam={this.webcamRef} gameRef={this.gameRef} />
        <Webcam ref={this.webcamRef} gameRef={this.gameRef} />
        <BackButton onStop={onStop} />
        <HappyBar percentage={happy} />
      </div>
    );
  }
}

export default PlayContainer;
