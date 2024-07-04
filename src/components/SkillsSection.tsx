import React, { FC } from 'react'
import html from './icons/HTML.svg'
import css from './icons/CSS.svg'
import react from './icons/React-Light.svg'
import cpp from './icons/CPP.svg'
import java from './icons/Java-Light.svg'
import sqlite from './icons/SQLite.svg'
import python from './icons/Python-Light.svg'

const SkillsSection:FC = () => {
  return (
    <div id="skills-section" className="section-container">
      <h2>My skills</h2>
        <ul className="skills-container">
            <li> <img src={html}alt="html-icon"/> HTML5</li>
            <li> <img src={css} alt="css-icon"/> CSS3</li>
            <li> <img src={react} alt="react-icon"/> React</li>
            <li> <img src={cpp} alt="cpp-icon"/> C++20</li>
            <li> <img src={java} alt="java-icon"/> Java21</li>
            <li> <img src={sqlite} alt="sql-icon"/> SQLite</li>
            <li> <img src={python} alt="py-icon"/> Python3</li>
        </ul>
    </div>
  )
}

export default SkillsSection
