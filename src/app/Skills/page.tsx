import React, { FC } from 'react'
const SkillsSection:FC = () => {
  return (
  <div id="skills-section" className="section-container">
      <h2>My skills</h2>
      <ul className="skills-container">
        <li> <img src="icons/HTML.svg" alt="html-icon" /> HTML5</li>
        <li> <img src="icons/CSS.svg" alt="css-icon" /> CSS3</li>
        <li> <img src="icons/React-Light.svg" alt="react-icon" /> React</li>
        <li> <img src="icons/CPP.svg" alt="cpp-icon" /> C++20</li>
        <li> <img src="icons/Java-Light.svg" alt="java-icon" /> Java21</li>
        <li> <img src="icons/SQLite.svg" alt="sql-icon" /> SQLite</li>
        <li> <img src="icons/Python-Light.svg" alt="py-icon" /> Python3</li>
      </ul>
    </div>
  )
}

export default SkillsSection
