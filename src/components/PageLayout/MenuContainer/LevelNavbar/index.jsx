import React from 'react';
import './styles.css';
import Start from '../../../../assets/star.png';

const LevelNavbar = ({ onPlay }) => (
    <div className="level-navbar">
        <div className="level" onClick={() => onPlay(1)}>
            <img src={Start} alt='' />
        </div>

        <div className="level" onClick={() => onPlay(1)}>
            <img src={Start} alt='' />
            <img src={Start} alt='' />
        </div>

        <div className="level" onClick={() => onPlay(2)}>
            <img src={Start} alt='' />
            <img src={Start} alt='' />
            <img src={Start} alt='' />
        </div>
    </div>
);

export default LevelNavbar;