import { FaArrowAltCircleUp } from "react-icons/fa";
import { useRef } from "react";
import confetti from 'canvas-confetti';

const Roulette = ({ onSpin, isSpinning }) => {
  const segments = [
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#581845",
    "#9CBA7F",
    "#FFC300",
    "#FF6F61",
    "#6A1B9A",
    "#00ACC1",
    "#4CAF50",
  ];
  const segmentCount = segments.length;
  const segmentAngle = 360 / segmentCount;
  const wheelRef = useRef(null);

  const handleSpin = () => {
    if (wheelRef.current && !isSpinning) {
      wheelRef.current.style.transition = "transform 3s ease-out";
      const rotation = Math.floor(Math.random() * 360) + 3600;
      wheelRef.current.style.transform = `rotate(${rotation}deg)`;

      setTimeout(() => {
        if (wheelRef.current) {
          const finalAngle = rotation % 360;
          const colorIndex =
            Math.floor((finalAngle + segmentAngle / 2) / segmentAngle) %
            segmentCount;
          const selectedColor = segments[colorIndex];
          onSpin(selectedColor);

          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      }, 3000);

      setTimeout(() => {
        if (wheelRef.current) {
          wheelRef.current.style.transition = "none";
          wheelRef.current.style.transform = `rotate(${rotation % 360}deg)`;
        }
      }, 3000);
    }
  };

  return (
    <div className="roulette-container">
      <div className={`roulette ${isSpinning ? "spinning" : ""}`}>
        <div className="wheel" ref={wheelRef}>
          {segments.map((color, index) => (
            <div
              key={index}
              className="segment"
              style={{
                backgroundColor: color,
                transform: `rotate(${index * segmentAngle}deg)`,
                clipPath: `polygon(0 0, 87% 0, 100% 100%)`,
                transformOrigin: "100% 100%",
              }}
            />
          ))}
        </div>
        <div className="arrow">
          <FaArrowAltCircleUp />
        </div>
      </div>
      <button
        className="spin-button"
        onClick={handleSpin}
        disabled={isSpinning}
      >
        {isSpinning ? "Girando..." : "Girar Ruleta"}
      </button>
    </div>
  );
};

export default Roulette;
