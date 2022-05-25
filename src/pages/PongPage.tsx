import React from 'react'
import BackButton from '../components/BackButton'
import './styles/PongPage.css'

type Props = {}

export default function PongPage({}: Props) {
  return (
    <div className="pong-page">
      <BackButton />
      <iframe 
        className="pong--game" 
        src="https://jordanlandry.github.io/pong/" 
        width={window.innerWidth * 0.8}
        height={window.innerWidth * 0.4}
        frameBorder={0}
      />
    </div>
  )
}