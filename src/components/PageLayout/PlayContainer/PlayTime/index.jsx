import React from 'react';
import './styles.css';

const displayFormattedTime = (seconds) => {
    const format = val => `0${Math.floor(val)}`.slice(-2);
    const minutes = (seconds % 3600) / 60;

    return [minutes, seconds % 60].map(format).join(':');
};

class PlayTime extends React.PureComponent {
    interval = null;

    state = {
        time: 0,
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                time: this.state.time + 1,
            })
        }, 1000);
    }

    render() {
        return (
            <div className="play-time">
                <span className="title">TIME</span>
                <span className="time">{displayFormattedTime(this.state.time)}</span>
            </div>
        );
    }
}

export default PlayTime;

