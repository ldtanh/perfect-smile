import React from 'react';
import './styles.scss';

const BackButton =  React.memo(({ onStop }) => (
    <div className="back-button" onClick={onStop}>
        BACK
    </div>
));

export default BackButton;