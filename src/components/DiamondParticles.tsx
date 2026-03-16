import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  angle: number;
  rotation: number;
  rotationSpeed: number;
}

interface DiamondParticlesProps {
  count?: number;
  className?: string;
}

export const DiamondParticles: React.FC<DiamondParticlesProps> = ({ 
  count = 20, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticles = () => {
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.5 + 0.1,
        angle: Math.random() * Math.PI * 2,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      }));
    };

    const drawDiamond = (x: number, y: number, size: number, rotation: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;

      // Diamond shape
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.6, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.6, 0);
      ctx.closePath();

      // Fill with gradient
      const gradient = ctx.createLinearGradient(-size, -size, size, size);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fill();

      // Add sparkle effect
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;
        particle.rotation += particle.rotationSpeed;

        // Wrap around edges
        if (particle.x < -10) particle.x = canvas.offsetWidth + 10;
        if (particle.x > canvas.offsetWidth + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.offsetHeight + 10;
        if (particle.y > canvas.offsetHeight + 10) particle.y = -10;

        // Pulse opacity
        particle.opacity = Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.3 + 0.2;

        drawDiamond(particle.x, particle.y, particle.size, particle.rotation, particle.opacity);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};