import React, { useEffect, useState } from 'react'
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
            { host !== '' && 
            <iframe 
              width={Math.min(1000, window.innerWidth * 0.8)}
              height={Math.min(1000, window.innerWidth * 0.8)}
              className="game--host" 
              src={host} /> }
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


  useEffect(() => {
    const handleKeydown = (e:any) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.view.event.preventDefault();
        console.log('asd');
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => {document.removeEventListener('keydown', handleKeydown)}
  }, [])
  


  return (
    <div className="gamepage">
      {gameElements}
      <h1 className="soon game--soon">More games coming soon</h1>
    </div>
  )
}