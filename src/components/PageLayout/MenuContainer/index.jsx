import React from 'react';
import LevelNavbar from "./LevelNavbar";
import Logo from '../../../assets/logo.png';
import './styles.css';

const MenuContainer = ({ onPlay }) => (
    <div className="menu-container">
        <img src={Logo} alt='' />

        <div className="title">
            CHOOSE LEVEL
        </div>

        <LevelNavbar onPlay={onPlay} />
    </div>
);

export default MenuContainer;