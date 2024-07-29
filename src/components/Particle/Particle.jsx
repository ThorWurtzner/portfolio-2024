import React from 'react'
import "./Particle.css";
import { useMemo, useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Particle(props) {
    
    const [init, setInit] = useState(false);

    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
      
    };
  
    const options = useMemo(
      () => ({
        background: {
          color: {
            value: "#fff",
          },
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        },
        "fullScreen": {
          "enable": false,
          "zIndex": 0
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#024959",
          },
          links: {
            color: "#01292e",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 100,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: false
      }),
      [],
    );

    if (init) {
        return (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        );
    }
    
    return <></>;
}