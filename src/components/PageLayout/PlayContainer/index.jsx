import React from 'react';
import PlayTime from "./PlayTime";
import Webcam from "./Webcam";
import PlayRoad from "./PlayRoad";

class PlayContainer extends React.Component {
    state = {
        score: 0,
    };

    handleScoreChange = (add) => {
        this.setState({
            score: this.state.score + add,
        });
    };

    render() {
        return (
            <div className="play-container">
                <PlayTime />
                <PlayRoad onScoreChange={this.handleScoreChange} />
                <Webcam />
            </div>
        )
    }
}

export default PlayContainer;