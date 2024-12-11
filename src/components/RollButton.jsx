import { useState } from "react";

export const RollButton = ({ onRoll, win, restart}) => {
  const [isRolling, setIsRolling] = useState(false);

  const handleClick = () => {
    if (isRolling) return;
    if(win() === true){
      restart()
    }
    setIsRolling(true);
    const diceElements = document.querySelectorAll(".dice");
    onRoll();

    diceElements.forEach((diceElement) => {
      diceElement.style.animation = "rolling 4s";
    });
    setTimeout(() => {
      diceElements.forEach((diceElement) => {
        diceElement.style.animation = "none";
      });
      setIsRolling(false);
    }, 4000);
  };

  return (
    <button
      className="duration-400 mt-16 cursor-pointer rounded-md border-2 border-[#b33951] px-4 py-2 text-lg font-bold text-[#b33951] transition hover:bg-[#b33951] hover:text-white"
      onClick={handleClick}
      disabled={isRolling}
    >
     {win() ? 'Start a new game' : 'Roll Dice'}
    </button>
  );
};

export default RollButton;
