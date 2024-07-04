import React from 'react'
import tg from './images/telegram.svg'
import github from './images/github.svg'
import email from './images/gmail.svg'


const LinkSection = () => {
  return (
    <div id="links-section" className="section-container">
            <h2>
                Contact me
            </h2>
            <ul className="links-list">
                <li><a href="https://t.me/ob0china" target="_blank" rel="noreferrer"><img id="tg-icon" src={tg} alt="tg-icon"/></a></li>
                <li><a href="https://github.com/sasaSilver" target="_blank" rel="noreferrer"><img id="gh-icon" src={github} alt="github-icon"/></a></li>
                <li><a href="mailto:mhlvsasha@gmail.com" target="_blank" rel="noreferrer"><img id="email" src={email} alt="email"/></a></li>
            </ul>
    </div>
  )
}

export default LinkSection
