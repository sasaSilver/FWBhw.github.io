import React, { FC } from 'react'
import pfp from 'public/images/pfp.jpg'
import Image from 'next/image'

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
        <Image id="pfp" src={pfp} alt="me"/>
    </header>
  );
}

export default Header;
