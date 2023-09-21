'use client'
import { useEffect, useState } from "react"
import AsciiArt from "./AsciiArt"

const window_x = 2500
const window_y = 570
const n_droplets = 40

function Droplet({
  start_x,
  start_y,
  droplets,
}: {
  start_x: number,
  start_y: number,
  droplets: string[],
}) {
  const [coord, setCoords] = useState([start_x, start_y])
  const [model, setModel] = useState(droplets[0])

  useEffect(() => {
    // make interval
    const interval = setInterval(() => {
      setCoords(() => {
        return [
          Math.random() * window_x,
          Math.random() * window_y,
        ]
      })

      setModel(() => {
        return droplets[Math.floor(Math.random() * droplets.length)]
      })
    }, 500)
    return () => clearInterval(interval)
  })

  return (
    <AsciiArt model={model} css={{
      top: coord[1],
      left: coord[0],
      opacity: Math.min(0.7, Math.random() * 1),
    }} />
  )
}

export default function Rain({rain}: {rain: string}) {
  const droplet_coordinates = Array(n_droplets).fill([0, 0])
    .map(() => {
      const x = Math.random() * window_x
      const y = Math.random() * window_y
      return [x, y]
    })

  return (
    <>
      {droplet_coordinates.map(([x, y], i) => (
        <Droplet key={i} start_x={x} start_y={y} droplets={rain.split(' ')} />
      ))}
    </>
  )
}