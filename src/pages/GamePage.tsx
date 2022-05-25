import React, { useState } from 'react'
import games from '../data/gamesData'
import './styles/Gamepage.css'


type Props = {}

export default function GamePage({}: Props) {
  const [ activeId, setActiveId ] = useState<number | null>(null)
  const handleClick = (id:number) => {
    setActiveId(id)
  }

  const gameElements = games.map(game => {
    const { name, id, desc, route, host, img } = game
    
    return (
      <div key={id + 1}>
      {activeId === id ? 
        <>
          <h1 className='game--active-name'>{name}</h1>
          {host === '' && <h1 className="soon game--soon">{name} Coming Soon!</h1>}
          {host !== '' && <div className="game--active-wrapper">
            { host !== '' && <iframe className="game--host" src={host} /> }
          </div>}
        </> :
        <div className="game--inactive-wrapper" onClick={() => handleClick(id)}>
          <img src={img} alt={`${name} thumbnail`} />
          <div className="game--inactive-info">
            <h1 className="game--inactive-name">{name}</h1>
            <h3 className="game--inactive-name">{desc}</h3>
          </div>
        </div>} 
      </div>
    )
  })


  return (
    <div className="gamepage">
      {gameElements}
      <h1 className="soon game--soon">More games coming soon</h1>
    </div>
  )
}