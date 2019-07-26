import React from "react";
import "./styles.scss";
import BackgroundVideo from "../BackgroundVideo";
import PlayContainer from "./PlayContainer";
import MenuContainer from "./MenuContainer";
import {LEVEL} from "../../const";

class PageLayout extends React.Component {
  state = {
    level: LEVEL.UNSET,
  };

  handleStartPlay = (level) =>
    this.setState({ level });

  handleStopPlay = () =>
    this.setState({ level: 0 });

  render() {
    const { level } = this.state;

    return (
      <div className="page-layout">
        <BackgroundVideo />

        {level !== LEVEL.UNSET && (
            <PlayContainer level={level} onStop={this.handleStopPlay} />
        )}

        {level === LEVEL.UNSET && (
            <MenuContainer onPlay={this.handleStartPlay} />
        )}
      </div>
    );
  }
}

export default PageLayout;
