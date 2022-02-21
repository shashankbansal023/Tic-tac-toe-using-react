import React from 'react'
import './Square.css'

const Square = (props) => {

  const {index, turn, boxArray, updateBoxArray, isGameWon}=props

  function handleClick(index){
     updateBoxArray(index,turn);
  }

  return (
    <button className="square" disabled={isGameWon} onClick={()=>handleClick(index)}>{boxArray[index]}</button>
  )
}

export default Square;

