import React, { useRef, useEffect, useState } from "react";

const Canvas = () => {
  const [stars, setStars] = useState([]);
  const canvasRef = useRef(null);
  const FPS = 15;
  const x = 25;
  const distance = (point1, point2) => {
    let xs = 0;
    let ys = 0;
    xs = point2.x - point1.x;
    xs = xs * xs;
    ys = point2.y - point1.y;
    ys = ys * ys;
    return Math.sqrt(xs + ys);
  };
  const updateStars = (width, height) => {
    let newStarts = stars;
    for (let i = 0, x = newStarts.length; i < x; i++) {
      let s = newStarts[i];
      s.x += s.vx / FPS;
      s.y += s.vy / FPS;
      if (s.x < 0 || s.x > width) s.vx = -s.vx;
      if (s.y < 0 || s.y > height) s.vy = -s.vy;
    }
    setStars(newStarts);
  };
  const draw = (ctx, canvas) => {
    console.log("DRAW");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let width = canvas.width;
    let height = canvas.height;
    updateStars(width, height);
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0, x = stars.length; i < x; i++) {
      var s = stars[i];
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = "black";
      ctx.stroke();
    }
    ctx.beginPath();
    for (let i = 0, x = stars.length; i < x; i++) {
      var starI = stars[i];
      ctx.moveTo(starI.x, starI.y);
      for (let j = 0, x = stars.length; j < x; j++) {
        let starII = stars[j];
        if (distance(starI, starII) < 150) {
          ctx.lineTo(starII.x, starII.y);
        }
      }
    }
    ctx.lineWidth = 0.05;
    ctx.strokeStyle = "white";
    ctx.stroke();
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    for (let i = 0; i < x && stars.length <= x; i++) {
      let newStarts = stars;
      newStarts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      });
      setStars(newStarts);
    }
    const intervalId = setInterval(() => draw(ctx, canvas), 1000 / FPS);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <canvas
      className="-z-10 bg-gray-900 h-full w-full absolute top-0 left-0"
      ref={canvasRef}
    />
  );
};

export default Canvas;
