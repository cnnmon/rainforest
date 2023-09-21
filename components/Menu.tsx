'use client'
import { useState } from 'react'
import AsciiArt from './AsciiArt'

const text = `
         _     ___                 _   
 ___ ___|_|___|  _|___ ___ ___ ___| |_ 
|  _| .'| |   |  _| . |  _| -_|_ -|  _|
|_| |__,|_|_|_|_| |___|_| |___|___|_|  
                                       
`

export default function Menu({
  rain,
  setRain,
}: {
  rain: string,
  setRain: (rain: string) => void,
}) {

  return (
    <div className="fixed p-8">
      <AsciiArt model={text} css={{
        position: 'relative'
      }} />
      <div className="gap-1 flex flex-col">
        <h1>by tiffany</h1>
        <input
          type="text"
          placeholder="...did the rain stop?"
          value={rain}
          onChange={(e) => setRain(e.target.value)}
        />
      </div>
    </div>
  )
}