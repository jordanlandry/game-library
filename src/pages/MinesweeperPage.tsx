import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import startGame from '../games/minesweeper/game'
import './styles/MinesweeperPage.css'

type Props = {}

export default function MinesweeperPage({}: Props) {
  const [ difficulty, setDifficulty ] = useState<string | undefined>("MEDIUM")
  const [ isGameRunning, setIsGameRunning ] = useState<boolean | null >(false)

  useEffect(() => {
    isGameRunning && startGame(difficulty)
  }, [difficulty, isGameRunning])

  return (
    <div>
      <BackButton />
      <canvas id="minesweeper-canvas" width={0} height={0}/>
      { !isGameRunning && 
        <button onClick={() => {setIsGameRunning(true)}}>Start Game</button> }
    </div>
  )
}