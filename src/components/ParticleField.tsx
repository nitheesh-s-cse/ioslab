import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  hue: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);
  const boltRef = useRef<{ active: boolean; alpha: number; segments: Array<[number, number]> }>({ active: false, alpha: 0, segments: [] });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Fewer particles on mobile for performance
    const count = isMobile
      ? Math.min(25, Math.floor(window.innerWidth / 20))
      : Math.min(80, Math.floor(window.innerWidth / 20));

    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * (isMobile ? 1.5 : 2) + 0.5,
      speedX: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.3),
      speedY: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.3),
      opacity: Math.random() * 0.5 + 0.1,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
      hue: Math.random() > 0.5 ? 187 : 260,
    }));

    const handleMouse = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    // Touch support for mobile
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('touchmove', handleTouch, { passive: true });

    const connectionDist = isMobile ? 80 : 120;
    const mouseDist = isMobile ? 100 : 150;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        p.pulse += p.pulseSpeed;
        const pulseOpacity = p.opacity + Math.sin(p.pulse) * 0.15;

        // Mouse interaction
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseDist) {
          const force = (mouseDist - dist) / mouseDist;
          p.x -= (dx / dist) * force * 0.5;
          p.y -= (dy / dist) * force * 0.5;
        }

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `hsla(${p.hue}, 80%, 65%, ${pulseOpacity})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 80%, 65%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${pulseOpacity * 0.8})`;
        ctx.fill();

        // Draw connections — skip on very small screens for perf
        if (!isMobile || count <= 15) {
          for (let j = i + 1; j < particles.current.length; j++) {
            const p2 = particles.current[j];
            const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
            if (d < connectionDist) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `hsla(187, 70%, 60%, ${(1 - d / connectionDist) * 0.08})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      });

      // Draw lightning bolt if active
      if (boltRef.current.active) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        const alpha = boltRef.current.alpha;
        // wide outer glow
        ctx.strokeStyle = `rgba(200,220,255,${0.12 * alpha})`;
        ctx.lineWidth = 18;
        ctx.beginPath();
        boltRef.current.segments.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
        ctx.stroke();
        // bright inner bolt
        ctx.strokeStyle = `rgba(245,255,255,${0.9 * alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        boltRef.current.segments.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
        ctx.stroke();
        ctx.restore();

        // fade bolt
        boltRef.current.alpha -= 0.02;
        if (boltRef.current.alpha <= 0) {
          boltRef.current.active = false;
          boltRef.current.segments = [];
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Randomly trigger lightings flashes (less frequent for performance)
    const flashTimer = setInterval(() => {
      if (Math.random() < 0.02) {
        // trigger overlay flash
        const el = overlayRef.current;
        if (el) {
          el.classList.remove('flash');
          // force reflow
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          el.offsetWidth;
          el.classList.add('flash');
        }

        // create bolt segments from top to near bottom
        const segs: Array<[number, number]> = [];
        const startX = Math.random() * canvas.width;
        let x = startX;
        let y = -10;
        const steps = 4 + Math.floor(Math.random() * 5); // fewer segments
        for (let i = 0; i < steps; i++) {
          x += (Math.random() - 0.5) * (canvas.width * 0.08);
          y += canvas.height / (steps + 1) + (Math.random() - 0.5) * 30;
          segs.push([Math.max(0, Math.min(canvas.width, x)), Math.max(0, Math.min(canvas.height, y))]);
        }
        boltRef.current.segments = segs;
        boltRef.current.alpha = 0.95;
        boltRef.current.active = true;
      }
    }, 1200);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('touchmove', handleTouch);
      clearInterval(flashTimer);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="particle-field"
        style={{ opacity: 0.6 }}
      />
      <div ref={overlayRef} className="lightings-overlay" aria-hidden />
    </>
  );
}
