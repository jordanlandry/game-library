import React from 'react'
import { useNavigate } from 'react-router'

type Props = {}

export default function BackButton({}: Props) {
  const history = useNavigate();
  return (
    <div>
      <button onClick={() => {history(-1)}}>Back</button>
    </div>
  )
}