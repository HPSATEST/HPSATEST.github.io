import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll"; // Import the Link component
import "./CSS Files/Navbar.css";
import Typewriter from "typewriter-effect/dist/core";

function Navbar() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "I am a Computer Science Student",
        "I like coding",
        "I enjoy watching shows",
        "Keep scrolling!",
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 50,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <div id="navbar">
      <div className="container">
        <button className="Resume" onClick={() => window.open("", "_blank")}>
          My Resume
        </button>
      </div>

      <a href="https://www.linkedin.com/in/akshay-vakil/" target="_blank" className="icons">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/Octrainn" target="_blank" className="icons">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <ul>
        <div className="name-box">
          <li className="Name">
            A <span className="period">.</span>
          </li>
        </div>
        
        <Link to="About" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="Projects" smooth={true} duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="Introduction">
        <h1>Hey, I'm Akshay</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>
          I'm currently a Full Stack Developer seeking many ways to improve my
          skills through problem-solving and creating various projects! Scroll
          down to learn more about me
        </p>
        <button>Contact Me</button>
      </div>
    </div>
  );
}

export default Navbar;
