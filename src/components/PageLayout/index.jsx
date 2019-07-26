import React from 'react';
import './styles.scss';
import BackgroundVideo from "../BackgroundVideo";
import PlayContainer from "./PlayContainer";
import MenuContainer from "./MenuContainer";

const STEP = {
    CHOOSE_LEVEL: 'CHOOSE_LEVEL',
    PLAY: 'PLAY',
};

class PageLayout extends React.Component {
    state = {
        step: STEP.CHOOSE_LEVEL,
    };

    handleStartPlay = (level) => {
        this.setState({
            step: STEP.PLAY,
        });
    };

    handleStopPlay = () => {
        this.setState({
            step: STEP.CHOOSE_LEVEL,
        });
    };

    render() {
        const { step } = this.state;

        return (
            <div className="page-layout">
                <BackgroundVideo />

                {
                    step === STEP.PLAY &&
                    <PlayContainer />
                }

                {
                    step === STEP.CHOOSE_LEVEL &&
                    <MenuContainer onPlay={this.handleStartPlay} />
                }
            </div>
        );
    }
}

export default PageLayout;