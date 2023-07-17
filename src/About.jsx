import React from 'react';
import './CSS Files/about.css';

function About() {
  return (
    <div  >
<h1 className='About'>About<span style={{ color: '#FF004F' }}>.</span></h1>
<div className='wrapper'>
  <div className='line'> </div>
  <div className='text'><p>Hey again! It's clear that I'm a passionate web developer with a versatile skill set, specializing primarily in full-stack development. With a deep understanding of both front-end and back-end development, I am constantly refining my abilities and seeking opportunities for growth in both domains.</p> 
 <br /> <p>At present, I am actively seeking full-stack opportunities that encompass both front-end and back-end development. If you're interested, I would be thrilled to connect and discuss potential collaborations. I am currently engrossed in several projects that emphasize specific tech stacks and frameworks, allowing me to further enhance my expertise.

Feel free to reach out if you would like to explore the potential of working together!</p>
<br />
<p>Check out my projects below!</p>
  </div>
  <div className='right-section'>icons</div>
</div>
</div>
   
  );
}

export default About;
