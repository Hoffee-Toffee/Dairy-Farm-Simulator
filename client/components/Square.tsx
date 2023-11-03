import { useState, useEffect } from 'react'

import lostSound from '../../public/sounds/ufo-landing-93632.mp3'
import milked from '../../public/sounds/milking-a-cow-22255.mp3'

function Square(prop) {
  const { state, index, grid, setGrid, playSound } = prop

  let clicked = false

  if (state === 'ufo') {
    setTimeout(() => {
      if (!clicked) {
        setGrid([])
        playSound(lostSound)
        console.log('you lose')
      }
    }, 5000)
  }

  const handleClick = () => {
    if (state == 'ufo') {
      clicked = true
      const newGrid = [...grid]
      // make array of cow index's
      const cows = []

      grid.forEach((state, index) => {
        if (state === 'cow') {
          cows.push(index)
        }
      })

      //Pick random cow index

      const ufoIndex = cows[Math.floor(Math.random() * cows.length)]
      newGrid[ufoIndex] = 'ufo'

      // Change this square back to a cow
      newGrid[index] = 'cow'

      // console.log(grid[ufoIndex])
      // console.log(grid[index])
      setGrid(newGrid)
    } else if (state === 'cow') {
      playSound(milked, true)
    }
  }

  const images = {
    cow: '',
    ufo: '../public/img/ufo.gif',
    empty: '',
  }

  // const handleDoubleClick = () => {
  //   setColor('white')
  // }

  // const handleMouseDrag = () => {
  //   setColor('lightblue')
  // }

  // const handleRightClick = (event) => {
  //   event.preventDefault()
  //   setColor('black')
  // }

  //  useEffect(() => {
  //   setInterval(2)
  //  })

  return (
    <img
      src={images[state]}
      id="square"
      className={state}
      onClick={handleClick}
      style={{
        margin: '5px',
      }}

      // onDoubleClick={handleDoubleClick}
      // onDragEnter={handleMouseDrag}
      // onContextMenu={handleRightClick}
    >
      {/* {state} */}
    </img>
  )
}

export default Square
