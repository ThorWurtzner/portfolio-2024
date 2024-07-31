import { React, useState, useEffect } from 'react'
import "./Header.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
    
    let [open, setOpen] = useState(false);
    let [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        window.requestAnimationFrame(() => {
            setOpen(!open);
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <>
            <div className={`header ${scrolled ? 'scrolled' : ''}`}>
                {/* <img src="/images/icons/menu.png" onClick={toggleMenu} id='menu' /> */}
                <FontAwesomeIcon icon={faBars} id='menu' onClick={toggleMenu} className={`${scrolled ? 'scrolledIcon' : ''}`} />
                <img src="/images/myLogo.png" alt="logo" id='myLogo' />
            </div>
            <div className={`mobileMenu ${open ? 'open' : ''}`}>
                {/* <img src='/images/icons/closeMenu.png' className='closeMenu' onClick={toggleMenu} /> */}
                <FontAwesomeIcon icon={faCircleXmark} className='closeMenu' onClick={toggleMenu} />
                <div className="menuLinks">
                    <div>
                        <a href="#home" onClick={toggleMenu}>Home</a>
                        <FontAwesomeIcon icon={faChevronRight} className='menuChevron'/>
                    </div>
                    <div>
                        <a href="#blog" onClick={toggleMenu}>Blog</a>
                        <FontAwesomeIcon icon={faChevronRight} className='menuChevron'/>
                    </div>
                    <div>
                        <a href="#projects" onClick={toggleMenu}>Projects</a>
                        <FontAwesomeIcon icon={faChevronRight} className='menuChevron'/>
                    </div>
                    <div>
                        <a href="#skills" onClick={toggleMenu}>Skills</a>
                        <FontAwesomeIcon icon={faChevronRight} className='menuChevron'/>
                    </div>
                    <div>
                        <a href="#aboutMe" onClick={toggleMenu}>About me</a>
                        <FontAwesomeIcon icon={faChevronRight} className='menuChevron'/>
                    </div>
                    <div>
                        <a href="#contact" onClick={toggleMenu}>Contact</a>
                        <FontAwesomeIcon icon={faChevronRight} className='menuChevron'/>
                    </div>
                </div>
            </div>
        </>
    )
}
