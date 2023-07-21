import React from 'react';
import Navbar from './Navbar';
import './CSS Files/App.css';
import ParticlesComponent from './components/particles'; // Update the import statement
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
