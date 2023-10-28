import React, { useState } from 'react'
import './Navigation.css'
import navLogo from '../assets/GPT-3.svg'
import menu from '../assets/menu.svg'

const Navigation = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const mobMenu = () => {
        setMobileMenu(true)
        if(mobileMenu === true){
            setMobileMenu(false)
        }
    }

  return (
    <div className='navigation-block'>
        <img className='navigation-block-mainImg' src={navLogo}></img>
        <nav className='navigation-block-nav'>
            <p>Home</p>
            <p>What is GPT?</p>
            <p>Opne AI</p>
            <p>Case Studies</p>
            <p>Library</p>
        </nav>
        <div className={`navigation-block-btn ${mobileMenu === true ? 'activeNavBlock' : ''}`}>
            <button className='navigation-block-btn-login'>Sign in</button>
            <button className='navigation-block-btn-registered'>Sing up</button>
        </div>
        <div className='navigation-block-mobMenu'>
            <img className={`navigation-block-mobMenu-img ${mobileMenu === true ? 'active' : ''}`} src={menu} onClick={mobMenu}></img>
            {mobileMenu === true && (
                <div className='navigation-block-mobMenu-menu'>
                    <div className='navigation-block-mobMenu-menu-close' onClick={mobMenu}>X</div>
                    <p>Home</p>
                    <p>What is GPT?</p>
                    <p>Opne AI</p>
                    <p>Case Studies</p>
                    <p>Library</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navigation