'use client'
import Forest from '../../components/Forest'
import Rain from '../../components/Rain'
import Menu from '../../components/Menu'
import { useState } from 'react'

export default function Home() {
  const [rain, setRain] = useState("/ / / / / / , , . ,/ / / / / / / , , . ,/ ,.// ✧˖ °. ⊹")

  return (
    <>
      <Rain rain={rain} />
      <Forest />
      <Menu rain={rain} setRain={setRain} />
    </>
  )
}
