import React from 'react'
import './Result.css'

const Result = (props)=>{

    const {gameWon=false , gameDrawn=false, restart=()=>{}, playerWon=''} = props
     return (
        <div className="result">
          {
              gameWon && <h1>{playerWon} won the game</h1>
          }
          {
              gameDrawn && <h1>Game is drawn</h1>
          }
          <button className="btn btn-primary" onClick={restart}>Restart</button>
        </div>
    )
}

export default Result;