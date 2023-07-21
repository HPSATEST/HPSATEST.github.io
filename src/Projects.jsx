import React from 'react';
import './CSS Files/projects.css';
import img1 from './Images/doobdab.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function Projects() {
  return (
    <div>
      <h1 className='title'>
        My Projects <span style={{ color: '#FF004F' }}>.</span>{' '}
      </h1>
      <div className='projects-wrapper'>
        <div className='project'>
          <img className='images' src={img1} alt='' />
          <div className='project-info'>
            <div className='project-title'>
              <h2>Health Policy Student Assosciation</h2>
              <div className='liness'></div>
               <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
            <h3><span style={{ color: '#FF004F' }}>HTML CSS JavaScript JQuery</span>{' '}</h3>
            <p>The website is a nonprofit organization aiming to raise awareness among students by providing information on corporate health and policies. It serves as a project proposal with a fully responsive design for both mobile and desktop platforms. </p>
          </div>
        </div>
        <div className='project'>
          <img className='images' src={img1} alt='' />
          <div className='project-info'>
            <div className='project-title'>
              <h2>Hackathon Fault Finder</h2>
              <div className='liness'></div>
               <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
            <h3><span style={{ color: '#FF004F' }}>NodeJS, Astro/React, HTML/CSS, JS/JSX, Python, OpenAI API, Figma</span>{' '}</h3>
            <p>The project employs OpenAI's API to generate interview-level questions paired with intentionally incorrect solutions. It utilizes a backend database in Node.js to present users with these questions and solutions, allowing them to review and debug the provided code. The system then provides feedback on the accuracy of the debugging process. </p>
          </div>
        </div>
        <div className='project'>
          <img className='images' src={img1} alt='' />
          <div className='project-info'>
            <div className='project-title'>
              <h2>Hackathon Fault Finder</h2>
              <div className='liness'></div>
               <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
            <h3><span style={{ color: '#FF004F' }}>NodeJS, Astro/React, HTML/CSS, JS/JSX, Python, OpenAI API, Figma</span>{' '}</h3>
            <p>The project employs OpenAI's API to generate interview-level questions paired with intentionally incorrect solutions. It utilizes a backend database in Node.js to present users with these questions and solutions, allowing them to review and debug the provided code. The system then provides feedback on the accuracy of the debugging process. </p>
          </div>
        </div>
        <div className='project'>
          <img className='images' src={img1} alt='' />
          <div className='project-info'>
            <div className='project-title'>
              <h2>Hackathon Fault Finder</h2>
              <div className='liness'></div>
               <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
            <h3><span style={{ color: '#FF004F' }}>NodeJS, Astro/React, HTML/CSS, JS/JSX, Python, OpenAI API, Figma</span>{' '}</h3>
            <p>Our objective was to employ OpenAI's API to generate interview-level questions paired with deliberately incorrect solutions. For the the project's core functionality, we created a backend database using Node JS. The system we developed selects a question for the user and presents them with an intentionally incorrect solution. The user's task is to review and debug the provided code. Once the debugging process is finished, the system provides feedback on the accuracy of the debugging. </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
