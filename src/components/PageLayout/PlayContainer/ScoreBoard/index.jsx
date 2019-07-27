import React from 'react';
import './styles.scss';

const ScoreBoard = ({ score }) => (
    <div className="score-board">
        {score}
    </div>
);

export default ScoreBoard;