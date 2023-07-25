  import React from 'react';
  import './CSS Files/projects.css';
  import img1 from './Images/doobdab.jpg';
  import medical from './Images/medical.png';
  import fault from './Images/FaultFinder.png';
  import calendar from './Images/Calendar.png';
  import tensor from './Images/TensorFlow.jpg';
  import discord from './Images/DiscordBot.png';

  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";


  function Projects() {
    return (
      <div id='Projects'>
        <h1 className='title'>
          My Projects <span style={{ color: '#FF004F' }}>.</span>{' '}
        </h1>
        <div className='projects-wrapper'>
          <div className='project'>
            <img className='images' src={medical} alt='' />
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
            <img className='images' src={fault} alt='' />
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
            <img className='images' src={calendar} alt='' />
            <div className='project-info'>
              <div className='project-title'>
                <h2>React Calculator</h2>
                <div className='liness'></div>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </div>
              <h3><span style={{ color: '#FF004F' }}>React JSX, GH-Pages, Vite, CSS</span>{' '}</h3>
              <p>React-Calendar is a feature-rich calendar component built using React. Leveraging the power of React, it offers several dynamic and interactive features to enhance the user experience.  </p>
            </div>
          </div>
          <div className='project'>
            <img className='images' src={discord} alt='' />
            <div className='project-info'>
              <div className='project-title'>
                <h2>Discord Bot Weaver</h2>
                <div className='liness'></div>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </div>
              <h3><span style={{ color: '#FF004F' }}>Python, OAuth 2.0, Spotify API</span>{' '}</h3>
              <p>Versatile Discord bot that utilizes the Spotify API to stream music, and it offers several other functionalities like moderation, chat restriction, image generation, and meme generation. </p>
            </div>
          </div>
          <div className='project'>
            <img className='images' src={tensor} alt='' />
            <div className='project-info'>
              <div className='project-title'>
                <h2>Tensor Flow Model</h2>
                <div className='liness'></div>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </div>
              <h3><span style={{ color: '#FF004F' }}>Python, Juypter Notebook, Google Colab</span>{' '}</h3>
              <p>Mini-project that  focuses on implementing a machine learning model to accurately differentiate between images of humans and animals, specifically distinguishing between dogs and cats. Additionally, the project leverages the computational capabilities of Google Colab to efficiently train the model and handle the image datasets effectively.   </p>
            </div>
          </div>
          

        </div>
      </div>
    );
  }

  export default Projects;
