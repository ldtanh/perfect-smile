import React from 'react';
import COOL from '../../../../assets/cool.png';
import PERFECT from '../../../../assets/perfect.png';
import './styles.scss';

const ScoreType = () => (
    <div id="score-type">
        <img id="score-cool" src={COOL} />
        <img id="score-perfect" src={PERFECT} />
    </div>
);

export default ScoreType;