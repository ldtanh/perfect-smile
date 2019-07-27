import React from "react";
import PlayTime from "./PlayTime";
import Webcam from "./Webcam";
import PlayRoad from "./PlayRoad";
import BackButton from "./BackButton";
import HappyBar from "./HappyBar";
import ScoreBoard from "./ScoreBoard";
import ScoreType from "./ScoreType";

let webcamId = 0;
class PlayContainer extends React.Component {
  webcamRef = React.createRef();
  gameRef = React.createRef();

  state = {
    score: 0,
    happy: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      webcamId++;
      this.setState({
        webcamId
      });
    }, 10000);
  }

  handleScoreChange = add => this.setState({ score: this.state.score + add });

  handleHappyChange = happy => {
      if (happy) {
          document.getElementById("happy-bar").style.width = `${happy * 100}%`;
          document.getElementById("happy-score").innerHTML = `+ ${parseInt(happy * 100)} HAPPY`;
          document.getElementById("happy-score").style.opacity = '1';

          setTimeout(() => {
              document.getElementById("happy-score").innerHTML = '';
              document.getElementById("happy-score").style.opacity = '0';
          }, 2000);
      }
  };

  handleScoreTypeDisplay = type => {
      document.getElementById("score-type").style.opacity = '1';

      if (type === 'COOL') {
          document.getElementById("score-cool").style.opacity = '1';

          setTimeout(() => {
              document.getElementById("score-type").style.opacity = '0';
              document.getElementById("score-cool").style.opacity = '0';
          }, 1000);
      } else {
          document.getElementById("score-perfect").style.opacity = '1';

          setTimeout(() => {
              document.getElementById("score-type").style.opacity = '0';
              document.getElementById("score-perfect").style.opacity = '0';
          }, 1000);
      }
  };

  render() {
    const { level, onStop } = this.props;
    const { happy, score } = this.state;

    return (
      <div className="play-container">
        <PlayTime />
        <PlayRoad
          level={level}
          onScoreChange={this.handleScoreChange}
          onHappyChange={this.handleHappyChange}
          onScoreTypeDisplay={this.handleScoreTypeDisplay}
          webcam={this.webcamRef}
          gameRef={this.gameRef}
        />
        <Webcam
          key={this.state.webcamId}
          ref={this.webcamRef}
          gameRef={this.gameRef}
        />
        <BackButton onStop={onStop} />
        <HappyBar percentage={happy} />
        <ScoreBoard score={score} />
        <ScoreType />
      </div>
    );
  }
}

export default PlayContainer;
