import React from 'react'
import BackButton from '../components/BackButton'
import './styles/PongPage.css'

type Props = {}

export default function PongPage({}: Props) {
  return (
    <div>
      <BackButton />
      <iframe 
        className="pong--game" 
        src="https://jordanlandry.github.io/pong/" 
        width={window.innerWidth * 0.8}
        height={window.innerWidth * 0.8 * 0.45 + 20}   // Source game height = 45vw, adding margin and borders is another 20 or so pixels
        frameBorder={0}
      />
    </div>
  )
}