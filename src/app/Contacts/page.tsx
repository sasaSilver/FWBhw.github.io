import React from 'react'
import tg from 'public/images/telegram.svg'
import github from 'public/images/github.svg'
import email from 'public/images/gmail.svg'
import Image from 'next/image'
import Footer from '../Footer/page'
const Contacts = () => {
  return (
    <>
    <div id="links-section" className="section-container">
      <h2>
        Contact me
      </h2>
      <ul className="links-list">
        <li><a href="https://t.me/ob0china" target="_blank" rel="noreferrer"><Image id="tg-icon" src={tg} alt="tg-icon" /></a></li>
        <li><a href="https://github.com/sasaSilver" target="_blank" rel="noreferrer"><Image id="gh-icon" src={github} alt="github-icon" /></a></li>
        <li><a href="mailto:mhlvsasha@gmail.com" target="_blank" rel="noreferrer"><Image id="email" src={email} alt="email" /></a></li>
      </ul>
    </div>
    <Footer />
    </>
  )
}

export default Contacts
