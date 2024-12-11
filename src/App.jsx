import { useState } from "react";
import Dice from "./components/Dice";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PlayerArea from "./components/PlayerArea";
import RollButton from "./components/RollButton";
import './style/dice.css'
function App() {
  const [faces, setFaces] = useState([1, 1, 1]);
  const [winner, setWinner] = useState(false)
  const [firstCount, setFirstCount] = useState(0);
  const [firstPlayerScore, setFirstPlayerScore] = useState(0);
  const [secondPlayerScore, setSecondPlayerScore] = useState(0);
  const [order, setOrder] = useState(0);

  const rollDice = () => {
    const newFaces = faces.map(() => Math.floor(Math.random() * 6) + 1);
    setFaces(newFaces);

    console.log("Бросок кубиков:", newFaces);
    const currentCount = newFaces.reduce((prev, cur) => prev + cur, 0);
    setTimeout(() => {
      if (order === 0) {
        setFirstCount(currentCount);
        setOrder(1);
      } else {
        setOrder(0);
        setFirstPlayerScore((prevScore) =>
          firstCount > currentCount ? prevScore + 1 : prevScore,
        );

        setSecondPlayerScore((prevScore) =>
          firstCount < currentCount ? prevScore + 1 : prevScore,
        );

        setFirstCount(0);
      }
    }, 4050);
  }

  const isWin = () => {
    if(firstPlayerScore === 3 || secondPlayerScore === 3){
      setWinner(true)
      return winner
    }
  }

  const restart = () => {
    setFirstPlayerScore(0);
    setSecondPlayerScore(0)
  }

  return (
    <main className="flex flex-col justify-between overflow-hidden">
      <Header />
      {firstPlayerScore === 3 ? <div className="flex justify-center"><p className="bg-secondary p-10 rounded-lg font-poppins text-xl font-bold">The winner is Player 1</p></div> :
      secondPlayerScore === 3 ? <div className="flex justify-center"><p className="bg-secondary p-10 rounded-lg font-poppins text-xl font-bold">The winner is Player 2</p></div> : <></>}
      <div className="flex items-center p-4 players-center">
        <div className="player-display">
        <PlayerArea number={1} score={firstPlayerScore} />
        </div>
        <div className="flex w-1/3 flex-col items-center rounded-2xl bg-gray-200 p-5 shadow-lg">
          <div className="flex dice-display justify-center">
            {faces.map((face, index) => (
              <Dice key={index} face={face} />
            ))}
          </div>
          <div className="mt-5">
            <RollButton onRoll={rollDice} win = {isWin} restart={restart}/>
          </div>
        </div>
        <div className="player-display">
        <PlayerArea number={2} score={secondPlayerScore} reversed={true} />
        </div>
      </div>
      <div className="mobile-display">
      <PlayerArea number={1} score={firstPlayerScore} />
      <PlayerArea number={2} score={secondPlayerScore} reversed={true} />
      </div>
      <Footer />
    </main>
  );
}

export default App;
