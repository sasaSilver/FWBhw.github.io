import React, {FC} from 'react'
import menu_icon from './images/menu-icon.png'
import ComicContainer from './ComicContainer'

const Footer:FC<{}> = () => {
  return (
    <>
    <nav className="navbar-list">
          <img id="menu-icon" src={menu_icon} alt="menu-icon" />
          <a className="hover-yellow" href="#header">
            Home
          </a>
          <a className="hover-yellow" href="#about-section">
            About
          </a>
          <a className="hover-yellow" href="#projects-section">
            Portfolio
          </a>
          <a className="hover-yellow" href="#links-section">
            Contacts
          </a>
          <ComicContainer email="al.mikhailov@innopolis.university"/>
    </nav>
    </>
  )
}

export default Footer
