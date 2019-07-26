import React from 'react';
import BgVideo from '../../assets/bg-video.mp4';
import './styles.css';

const BackgroundVideo = ({ level }) => (
    <div className="background-video">
        <iframe
            src={
                !level
                    ? "https://www.youtube.com/embed/rRzxEiBLQCA?autoplay=1&controls=0&showinfo=0&autohide=1&start=0&loop=1&mute=1"
                    : level
            }
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />

        {/*<video autoPlay loop id="bg-video">*/}
        {/*    <source src={BgVideo} type="video/mp4" />*/}
        {/*</video>*/}

        <div className="background-video-bg" />
    </div>
);

export default BackgroundVideo;