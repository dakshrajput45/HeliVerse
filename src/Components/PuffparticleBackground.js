import React, { useRef, useEffect, useState } from "react";

const PuffParticlesBackground = () => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [mouse, setMouse] = useState({ x: undefined, y: undefined });
  const [prevMouse, setPrevMouse] = useState({ x: undefined, y: undefined });
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeReset = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const mousemove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    const mouseout = () => {
      setMouse({ x: undefined, y: undefined });
      setPrevMouse({ x: undefined, y: undefined });
    };

    class Particle {
      constructor(x, y, sizeMultiplier) {
        this.x = x;
        this.y = y;
        this.radius = 5 * sizeMultiplier;
        this.size = 10 * sizeMultiplier;
        this.rotate = 10;
        this.hue = hue % 360;
        this.alpha = 1;
        this.point = [];
      }

      setPoint() {
        let r, x, y;
        this.point = [];
        for (let a = 0; a < 360; a += 36) {
          let d = (a / 36) % 2 === 0 ? this.size : this.size / 2;
          r = (Math.PI / 180) * (a + this.rotate);
          x = this.x + d * Math.sin(r);
          y = this.y + d * Math.cos(r);
          this.point.push({ x: x, y: y, r: this.radius });
        }
      }

      draw() {
        if (this.radius <= 0) return;
        this.point.forEach((p) => {
          ctx.beginPath();
          ctx.rect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2); // Draw square
          ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
          ctx.fill();
          ctx.closePath();
        });
      }

      update() {
        this.setPoint();
        this.radius -= 0.03;
        this.size += 0.3;
        this.rotate -= 0.5;
        this.alpha = this.radius * 0.3 < 0.3 ? this.radius * 0.3 : 0.3;
      }
    }

    const animationLoop = () => {
      if (mouse.x !== undefined && mouse.y !== undefined) {
        if (mouse.x !== prevMouse.x || mouse.y !== prevMouse.y) {
          setHue((prevHue) => prevHue + 2);
          const sizeMultiplier = Math.min(canvas.width, canvas.height) / 350;
          setParticles((prevParticles) => [
            ...prevParticles,
            new Particle(mouse.x, mouse.y, sizeMultiplier),
          ]);
        }
        setPrevMouse({ x: mouse.x, y: mouse.y });
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.alpha <= 0) {
          particles.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animationLoop);
    };

    window.addEventListener("resize", resizeReset);
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseout", mouseout);

    resizeReset();
    animationLoop();

    return () => {
      window.removeEventListener("resize", resizeReset);
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseout", mouseout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles, mouse, hue, prevMouse]);

  return <canvas id="canvas" ref={canvasRef}>
  </canvas>;
};

export default PuffParticlesBackground;
