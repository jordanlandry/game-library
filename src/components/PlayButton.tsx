import React from 'react'
import './PlayButton.css'

type Props = {
  isGameRunning: boolean
  setIsGameRunning: (isGameRunning:boolean) => void
}

export default function PlayButton({ setIsGameRunning, isGameRunning }: Props) {
  return (
    <p 
      className="playbtn--btn" 
      onClick={() => {setIsGameRunning(true)}}>
      Play Game </p>
  )
}