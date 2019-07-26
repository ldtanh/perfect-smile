import React from 'react';
import './styles.css';
import Start from '../../../../assets/star.png';
import {LEVEL} from "../../../../const";

const LevelNavbar = ({ onPlay }) => (
    <div className="level-navbar">
        <div className="level" onClick={() => onPlay(LEVEL.EASY)}>
            <img src={Start} alt='' />
        </div>

        <div className="level" onClick={() => onPlay(LEVEL.MEDIUM)}>
            <img src={Start} alt='' />
            <img src={Start} alt='' />
        </div>

        <div className="level" onClick={() => onPlay(LEVEL.HARD)}>
            <img src={Start} alt='' />
            <img src={Start} alt='' />
            <img src={Start} alt='' />
        </div>
    </div>
);

export default LevelNavbar;