'use client'
import React, {FC, useState} from 'react'
import menu_icon from 'public/images/menu-icon.png'
import Link from 'next/link'
import Image from 'next/image'

const Footer:FC<{}> = () => {
  return (
    <>
    <nav className="navbar-list">
          <Image id="menu-icon" src={menu_icon} alt="menu-icon" />
          <Link className="hover-yellow" href="/">
            Home
          </Link>
          <Link className="hover-yellow" href="./About">
            About
          </Link>
          <Link className="hover-yellow" href="./Projects">
            Portfolio
          </Link>
          <Link className="hover-yellow" href="./Contacts">
            Contacts
          </Link>
          <Link className={"comic-link"}href={"./Comic"}>
              Show funny comic from homework!!!
          </Link>
    </nav>
    </>
  )
}

export default Footer
