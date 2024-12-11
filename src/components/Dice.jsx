import { useEffect, useRef } from "react";
import "../style/dice.css";

const Dice = ({ face }) => {
  const diceRef = useRef(null);

  useEffect(() => {
    const dice = diceRef.current;
    if (dice) {
      switch (face) {
        case 1:
          dice.style.transform = "rotateX(0deg) rotateY(0deg)";
          break;
        case 6:
          dice.style.transform = "rotateX(180deg) rotateY(0deg)";
          break;
        case 2:
          dice.style.transform = "rotateX(-90deg) rotateY(0deg)";
          break;
        case 5:
          dice.style.transform = "rotateX(90deg) rotateY(0deg)";
          break;
        case 3:
          dice.style.transform = "rotateX(0deg) rotateY(90deg)";
          break;
        case 4:
          dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
          break;
        default:
          break;
      }
    }
  }, [face]);

  return (
    <div className="py-15 m-10 grid place-items-center rounded-2xl shadow-lg">
      <div className="dice" ref={diceRef}>
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
        <div className="face right"></div>
        <div className="face left"></div>
      </div>
    </div>
  );
};

export default Dice;
