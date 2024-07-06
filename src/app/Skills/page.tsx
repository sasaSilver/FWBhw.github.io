import React, { FC } from 'react'
import html from 'public/icons/HTML.svg'
import css from 'public/icons/CSS.svg'
import react from 'public/icons/React-Light.svg'
import cpp from 'public/icons/CPP.svg'
import java from 'public/icons/Java-Light.svg'
import sqlite from 'public/icons/SQLite.svg'
import python from 'public/icons/Python-Light.svg'
import Image from 'next/image'
import Footer from '../Footer/page'
const SkillsSection:FC = () => {
  return (
    <><div id="skills-section" className="section-container">
      <h2>My skills</h2>
      <ul className="skills-container">
        <li> <Image src={html} alt="html-icon" /> HTML5</li>
        <li> <Image src={css} alt="css-icon" /> CSS3</li>
        <li> <Image src={react} alt="react-icon" /> React</li>
        <li> <Image src={cpp} alt="cpp-icon" /> C++20</li>
        <li> <Image src={java} alt="java-icon" /> Java21</li>
        <li> <Image src={sqlite} alt="sql-icon" /> SQLite</li>
        <li> <Image src={python} alt="py-icon" /> Python3</li>
      </ul>
    </div><Footer /></>
  )
}

export default SkillsSection
