import React, { FC } from 'react'
import pfp from './images/pfp.jpg'
import arrowButton from './images/arrow.svg'


const Header:FC<{}> = () => {
  return (
    <header id="header">
        <div id="header-text">
            <h1 id="my-name">Aleksandr Mikhailov</h1>
            <div id="intro-container">
                <h2 id="occupation-container">Front-end Web developer, UX/UI designer</h2>
                <p id="soon-to-be">soon to be i hope lol :)</p>
            </div>
        </div>
        <img id="pfp" src={pfp} alt="me"/>
        <a id="arrow-button" href="#projects-section">
            <img id="arrow" src={arrowButton} alt="down-arrow"/>
        </a>
    </header>
  );
}

export default Header;
