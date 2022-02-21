import React, { useState } from "react";
import Board from "./Board";
import "./Game.css";
import Result from './Result'

const Game = () => {
  const [turn, setTurn] = useState("o");
  const [boxArray, setBoxArray] = useState(new Array(9).fill(""));
  const [gameWon, setGameWon] = useState(false);
  const [playerWon, setPlayerWon] = useState("");
  const [gameDrawn, setGameDrawn] = useState(false);

  function changeTurn(turn) {
    if (turn === "o") {
      setTurn("x");
    } else {
      setTurn("o");
    }
  }

  function updateBoxArray(index, value) {
    let array = [...boxArray];
    if (!array[index]) {
      array[index] = value;
      setBoxArray(array);
      changeTurn(value);
    }
    checkWin(array);
  }

  function restart() {
    setBoxArray(new Array(9).fill(""));
    setGameWon(false);
    setGameDrawn(false);
  }

  function checkWin(array) {
    let winningCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    let emptyBoxes = array.filter((item) => item == "");
    let flag = false;

    for(let i = 0;i < winningCombinations.length;i++){
        const [a,b,c] = winningCombinations[i];
        if( array[a] && array[a]===array[b] && array[b]===array[c]){
          flag = true;
          setGameWon(true);
          setPlayerWon(array[a]);
        }
    }

      if (!flag && !emptyBoxes.length) {
        setGameDrawn(true);
      }
    
  }

  return (
    <div className="container">
      <h1 class="heading">TIC TAC TOE</h1>
      {!(gameWon || gameDrawn) && <h2>Turn : {turn}</h2>}
      <Board
        isGameWon={gameWon}
        boxArray={boxArray}
        turn={turn}
        updateBoxArray={updateBoxArray}
      />
      {gameWon && 
        <Result gameWon={gameWon} playerWon={playerWon} restart={restart}/>
      }
      {gameDrawn && (
        <Result gameDrawn={gameDrawn} restart={restart}/>
      )}
    </div>
  );
};

export default Game;
