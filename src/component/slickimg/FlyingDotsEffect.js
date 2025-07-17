import React, { useEffect, useRef } from "react";
import "../slickimg/FlyingDotsEffect.scss";

const FlyingDotsEffect = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    const createDot = () => {
      const dot = document.createElement("div");
      dot.className = "dot";

      dot.style.left = Math.random() * container.offsetWidth + "px";
      dot.style.bottom = "0px";

      const size = Math.random() * 8 + 4;
      dot.style.width = size + "px";
      dot.style.height = size + "px";

      const duration = Math.random() * 11 + 11;
      dot.style.animationDuration = `${duration}s`;

      container.appendChild(dot);

      setTimeout(() => {
        container.removeChild(dot);
      }, duration * 1000);
    };

    const interval = setInterval(createDot, 150);

    return () => clearInterval(interval);
  }, []);

  return <div className="flying-dots-container" ref={containerRef}></div>;
};

export default FlyingDotsEffect;
