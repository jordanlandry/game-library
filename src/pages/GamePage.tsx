import React from 'react'
import gamesData from '../data/gamesData'
import './styles/Gamepage.css'

type Props = {}

export default function GamePage({}: Props) {
  const gameElements = gamesData.map(game => {
    const { name, id, desc, img, route } = game;
    return (
      <a className="gamecard--wrapper" key={id + 1} href={route}>
        <img className="gamecard--img" src={img} />
        <h2 className="gamecard--name">{name}</h2>
        <h3 className="gamecard--desc">{desc}</h3>
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