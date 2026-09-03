document.addEventListener('DOMContentLoaded', function() {
    const symbols = ['*', '✦', '✧', '⁕', '✵', '✶', '✷', '◇', '◆', '✳', '✴', ' ⋆', '・ﾟ⋆'];
    const container = document.body;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const particles = [];
  
    // Insert custom CSS styles - REMOVE overflow:hidden from body!
    const style = document.createElement('style');
    style.textContent = `
      body {
        margin: 0;
        /* Remove the overflow: hidden line */
        background: #add8e6; /* default light blue */
      }
      .ascii-particle {
        position: fixed; /* Use fixed instead of absolute */
        user-select: none;
        pointer-events: none;
        font-family: monospace;
        will-change: transform, opacity;
        z-index: -1; /* Ensure particles stay behind content */
      }
    `;
    document.head.appendChild(style);
  
    // Create particles with enhanced properties
    for (let i = 0; i < 200; i++) {
      const particle = document.createElement('span');
      particle.className = 'ascii-particle';
      particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  
      const size = Math.random() * 20 + 10;
      const x = Math.random() * width;
      const y = Math.random() * height;
      const speedX = Math.random() * 0.5 - 0.25;
      const speedY = Math.random() * 0.5 - 0.25;
      const rotation = Math.random() * 360;
      const rotationSpeed = Math.random() * 2 - 1; // degrees per frame
      const color = `hsl(${Math.random() * 360}, 70%, 70%)`;
      const opacity = 0.7 + Math.random() * 0.3;
      
      particle.style.fontSize = `${size}px`;
      particle.style.color = color;
      
      container.appendChild(particle);
      
      particles.push({
        element: particle,
        x: x,
        y: y,
        speedX: speedX,
        speedY: speedY,
        rotation: rotation,
        rotationSpeed: rotationSpeed,
        baseOpacity: opacity,
        phase: Math.random() * Math.PI * 2 // for oscillation effect
      });
    }
  
    // Animate particles and the moving light blue gradient background
    function animate() {
      const time = Date.now() * 0.002;
      
      // Calculate moving gradient center (in percentage)
      const centerX = 50 + 20 * Math.sin(time); // moves horizontally between 30% and 70%
      const centerY = 50 + 20 * Math.cos(time); // moves vertically between 30% and 70%
      
      // Update background to a radial gradient with light blue colors
      document.body.style.background = `radial-gradient(circle at ${centerX}% ${centerY}%,rgb(196, 221, 230),rgb(76, 178, 230))`;
      
      // Animate particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position and rotation
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        
        // Wrap around screen edges
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;
        if (p.y > height) p.y = 0;
        if (p.y < 0) p.y = height;
        
        // Oscillate scale and opacity for a pulsating effect
        const scale = 2 + 0.3 * Math.sin(time/5 + p.phase);
        const opacity = p.baseOpacity * (0.5 + 0.5 * Math.sin(time/10 + p.phase));
        
        // Apply transformation and opacity
        p.element.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.rotation}deg) scale(${scale})`;
        p.element.style.opacity = opacity;
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
  });
  