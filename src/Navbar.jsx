import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './CSS Files/Navbar.css';

function Navbar() {
  return (
    <div>
      <div className='container'>
        <button className='Resume' onClick={() => window.open('', '_blank')}>
          My Resume
        </button>
      </div>

      <a href="#" target='_blank' className='icons'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
      <a href="#" target='_blank' className='icons'><FontAwesomeIcon icon={faGithub} size="2x" /></a>

      <ul>
        <div className='name-box'>
          <li className='Name'>A <span className='period'>.</span></li>
        </div>
        <a href=""><li>About</li></a>
        <a href=""><li>Project</li></a>
        <a href=""><li>Contact</li></a>
      </ul>
      <div className='Introduction'>
        <h1>Hey, I'm Akshay</h1>
        <h2>I'm a <span>Computer Science student attending  Toronto Metropolitan University. </span></h2>
        <p>I'm currently a Full Stack Developer seeking many ways to improve my skills through problem solving creating various projects! Scroll down to learn more about me :D</p>
        <button>Contact Me</button>
      </div>
    </div>
  );
}

export default Navbar;
