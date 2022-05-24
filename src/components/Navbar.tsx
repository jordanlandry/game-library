import React from 'react'
import './Navbar.css'

type Props = {}

export default function Navbar({}: Props) {
  
  return (
    <div className="navbar--wrapper">
      <a className="navbar--link" href="/game-library">Home</a>
      <a className="navbar--link" href="/game-library/games">Games</a>
    </div>
  )
}