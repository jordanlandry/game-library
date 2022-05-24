import React from 'react'
import gamesData from '../data/gamesData'
import './styles/Gamepage.css'

type Props = {}

export default function GamePage({}: Props) {
  const gameElements = gamesData.map(game => {
    const { name, id, desc, img, route } = game;
    return (
      <a className="gamecard--wrapper" key={id + 1} href={`/game-library${route}`}>
        <img className="gamecard--img" src={img} />
        <div className="gamecard--info">
          <h2 className="gamecard--name">{name}</h2>
          <p className="gamecard--desc">{desc}</p>
        </div>
      </a>
    )
  })

  return (
    <div className="gamepage">
      {gameElements}
      <h1 className="soon">More games coming soon</h1>
    </div>
  )
}