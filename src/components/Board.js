import React from 'react'
import Square from './Square'
import './Board.css'

const Board = (props) => {

  const {boxArray,turn,updateBoxArray,isGameWon} = props;
  
  return (
    <div className="wrapper">
        <div className="board-container">
            {
                boxArray.map((_,index)=>{
                    return(
                        <Square 
                        key={index+1}
                        index={index}
                        turn={turn}
                        updateBoxArray={updateBoxArray}
                        boxArray={boxArray}
                        isGameWon={isGameWon}/>
                    )
                })
            }
        </div>
    </div>  
  )
}

export default Board