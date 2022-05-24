import React from 'react'
import { useNavigate } from 'react-router'
import './BackButton.css'

type Props = {}

export default function BackButton({}: Props) {
  const history = useNavigate();
  return (
    <div className="backbtn--wrapper">
      <p 
        className="backbtn--btn" 
        onClick={() => {history(-1)}}>
        Back </p>
    </div>
  )
}