import React from 'react'
import BackButton from '../components/BackButton'
import './styles/Twenty48.css'

type Props = {}

export default function Twenty48Page({}: Props) {
  return (
    <div className="soon">
      <BackButton />
      <h1>COMING SOON!</h1>
    </div>
  )
}