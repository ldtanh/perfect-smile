import React from 'react';
import './styles.css';

const HappyBar =  React.memo(({ percentage }) => (
    <div className="happy-bar-container">
        <div className="happy-bar-title">HAPPINESS</div>
        <div className="happy-bar">
            <div className="filler" id="happy-bar" style={{ width: `${percentage}%` }} />
        </div>
    </div>
));

export default HappyBar;