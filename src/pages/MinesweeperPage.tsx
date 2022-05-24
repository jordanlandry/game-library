import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import PlayButton from '../components/PlayButton'
import startGame from '../games/minesweeper/game'
import './styles/MinesweeperPage.css'

type Props = {}

export default function MinesweeperPage({}: Props) {
  const [ difficulty, setDifficulty ] = useState<string | undefined>('BEGINNER')
  const [ isGameRunning, setIsGameRunning ] = useState<boolean>(false)

  useEffect(() => {
    isGameRunning && startGame(difficulty)
  }, [difficulty, isGameRunning])


  const handleDifficultyChange = (e:any):void => {
    setDifficulty(e.target.value);
  }

  return (
    <div>
      <BackButton />
      <canvas id="minesweeper-canvas" width={0} height={0}/>
      { !isGameRunning && 
        <>
        <div className="minesweeper--select-wrapper">
          <select className="minesweeper--select" onChange={handleDifficultyChange}>
            <option value="DEFAULT">Select Difficulty</option>
            <option value="BEGINNER">Beginner</option>
            <option value="MEDIUM">Intermediate</option>
            <option value="HARD">Expert</option>
          </select>
        </div>
        <PlayButton 
          setIsGameRunning={setIsGameRunning} 
          isGameRunning={isGameRunning}/> 
        </>
          }
    </div>
  )
}