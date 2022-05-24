import React from 'react'
import './Navbar.css'

type Props = {}

export default function Navbar({}: Props) {
  
  return (
    <div className="navbar--wrapper">
      <a className="navbar--link" href="/">Home</a>
      <a className="navbar--link" href="/games">Games</a>
    </div>
  )
}