import React, { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticlesComponent() {
  useEffect(() => {
    const initParticles = async () => {
      await loadFull(['particles']);
    };

    initParticles();
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: '#111',
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 10,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'star',
              polygon: {
                sides: 5,
              },
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: false,
              },
            },
            size: {
              value: 4,
              random: false,
              anim: {
                enable: false,
              },
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              attract: {
                enable: false,
              },
            },
          },
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab',
              },
              onclick: {
                enable: false,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1,
                },
              },
              push: {
                particles_nb: 4,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default ParticlesComponent;
