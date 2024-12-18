import React, { useEffect, useRef, useState } from 'react';

const HeroParticles = () => {
  const canvasRef = useRef(null);
  const [isRendered, setIsRendered] = useState(false); // Variável para rastrear a renderização

  // Classe Bubble
  class Bubble {
    constructor(parentNode, number) {
      this.number = number;
      this.parentNode = parentNode;
      this.getCanvasSize();
      window.addEventListener('resize', () => this.getCanvasSize());

      this.mouseX = 0;
      this.mouseY = 0;
      window.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
      });

      this.randomise(number);
    }

    getCanvasSize() {
      this.canvasWidth = this.parentNode.clientWidth;
      this.canvasHeight = this.parentNode.clientHeight;
    }

    generateDecimalBetween(min, max) {
      return (Math.random() * (min - max) + max).toFixed(2);
    }

    update() {
      this.translateX = this.translateX - this.movementX;
      this.translateY = this.translateY - this.movementY;
      this.posX += ((this.mouseX / (this.staticity / this.magnetism)) - this.posX) / this.smoothFactor;
      this.posY += ((this.mouseY / (this.staticity / this.magnetism)) - this.posY) / this.smoothFactor;

      if (this.translateY + this.posY < 0 || this.translateX + this.posX < 0 || this.translateX + this.posX > this.canvasWidth) {
        this.randomise(this.number);
        this.translateY = this.canvasHeight;
      }
    }

    randomise(number) {
      this.colors = ['255,255,255'];
      this.velocity = 30; // Bubble levitation velocity (the higher the slower)
      this.smoothFactor = 50; // The higher, the smoother
      this.staticity = 30; // Increase value to make bubbles move slower on mousemove
      this.magnetism = 0.1 + Math.random() * 4;
      this.color = '255,255,255';
      this.alpha = this.generateDecimalBetween(10, 20) / 10;
      this.size = number === 0 ? 70 : number === 1 ? 34 : 20;
      this.posX = number === 0 ? 276 : number === 1 ? 282 : 38;
      this.posY = number === 0 ? 70 : number === 1 ? 290 : 297;
      this.movementX = this.generateDecimalBetween(-2, 2) / this.velocity;
      this.movementY = this.generateDecimalBetween(1, 20) / this.velocity;
      this.translateX = this.generateDecimalBetween(0, this.canvasWidth);
      this.translateY = this.generateDecimalBetween(0, this.canvasHeight);
    }
  }

  // Classe Background
  class Background {
    constructor(selector) {
      this.canvas = document.getElementById(selector);
      this.ctx = this.canvas.getContext('2d');
      this.dpr = window.devicePixelRatio;
    }

    start() {
      this.canvasSize(); // Chama para garantir o tamanho correto do canvas na inicialização
      this.bubblesList = [];
      this.generateBubbles();
      this.animate();
    }

    canvasSize() {
      this.container = this.canvas.parentNode;
      this.w = this.container.offsetWidth;
      this.h = this.container.offsetHeight;
      this.wdpi = this.w * this.dpr;
      this.hdpi = this.h * this.dpr;
      this.canvas.width = this.wdpi;
      this.canvas.height = this.hdpi;
      this.canvas.style.width = this.w + 'px';
      this.canvas.style.height = this.h + 'px';
      this.ctx.scale(this.dpr, this.dpr);
    }

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
      this.bubblesList.forEach((bubble) => {
        bubble.update();
        this.ctx.translate(bubble.translateX, bubble.translateY);
        this.ctx.beginPath();
        this.ctx.arc(bubble.posX, bubble.posY, bubble.size, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'rgba(' + bubble.color + ',' + bubble.alpha + ')';
        this.ctx.fill();
        this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      });
      requestAnimationFrame(this.animate.bind(this));
    }

    addBubble(bubble) {
      return this.bubblesList.push(bubble);
    }

    generateBubbles() {
      for (let i = 0; i < this.bubbleDensity(); i++) {
        this.addBubble(new Bubble(this.canvas.parentNode, i));
      }
    }

    bubbleDensity() {
      return 3;
    }
  }

  useEffect(() => {
    if (isRendered) {
      const canvas = canvasRef.current;
      const heroParticles = new Background(canvas.id);

      // Inicia as partículas
      heroParticles.start();
    }
  }, [isRendered]); // Depende de `isRendered`

  useEffect(() => {
    // Marca como renderizado após a montagem do componente
    setIsRendered(true);
  }, []);

  return <canvas id="hero-particles" className="absolute" ref={canvasRef}></canvas>;
};

export default HeroParticles;
