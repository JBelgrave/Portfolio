import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'C:/Users/Udon/Documents/Development/portfolio/src/components/Assets/Logo.png';

export default function NavBar() {
  return (
    <nav>
      <Link className='navLogo navBarLi' to='landingpage'>
        <img className='logo' src={logo}></img>
      </Link>
      <div className='navBarText'>
        <ul>
          <Link className='navBarLi' to='landingpage'>
            Landing Page
          </Link>
          <Link className='navBarLi' to='about'>
            About
          </Link>
          <Link className='navBarLi' to='portfolio'>
            Portfolio
          </Link>
          <Link className='navBarLi' to='priorexperience'>
            Prior Experience
          </Link>
          <Link className='navBarLi' to='contact'>
            Contact
          </Link>
          <a className='navBarLi resume' target='_blank'
            href='https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing'>
            Resume
          </a>
        </ul>
      </div>
    </nav>
  )
}