import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './CSS Files/Navbar.css';

function Navbar() {
  return (
    <div>
      <div className='container'>
        <a className='Resume' href="" target='__blank'>My Resume</a>  
      </div>
    
      <a href="#" target='_blank' className='icons'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
      <a href="#" target='_blank' className='icons'><FontAwesomeIcon icon={faGithub} size="2x" /></a>
      
      
      <ul>
        <div className='name-box'> 
          <li className='Name'>A <span className='period'>.</span></li>
        </div>
        <a href=""> <li>About</li></a>
        <a href=""><li>Project</li></a>
        <a href="">  <li>Contact</li></a>
      </ul>
    </div>
  );
}

export default Navbar;
