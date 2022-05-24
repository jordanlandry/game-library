import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import PlayButton from '../components/PlayButton'
import startGame from '../games/minesweeper/game'
import './styles/MinesweeperPage.css'

type Props = {}

export default function MinesweeperPage({}: Props) {
  const [ difficulty, setDifficulty ] = useState<string>('MEDIUM')
  const [ isGameRunning, setIsGameRunning ] = useState<boolean>(false)

  interface IDictionary<TValue> {
    [id: string] : TValue;
  }

  const localStorageNames:IDictionary<string> = {
    BEGINNER: 'easy-high-score',
    MEDIUM: 'med-high-score',
    HARD : 'hard-high-score',
  }

  const [ highscore, setHighscore ] = useState<any>(
    localStorage.getItem(localStorageNames[difficulty])
  )

  const handleSetHighScore = (score:number) => {
    if (highscore === null || score < parseInt(highscore)) {
      localStorage.setItem(localStorageNames[difficulty], JSON.stringify(score))
      setHighscore(highscore)
    }
  }

  const handleDifficultyChange = (e:any):void => {
    setDifficulty(e.target.value);
  }

  // Update high score when difficulty is changed
  useEffect(() => {
    setHighscore(localStorage.getItem(localStorageNames[difficulty]))
  }, [difficulty])


  useEffect(() => {
    isGameRunning && startGame(difficulty, handleSetHighScore)
  }, [difficulty, isGameRunning])

  return (
    <div>
      <BackButton />
      <h1 className="minesweeper--highscore">High Score: {highscore} </h1>
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