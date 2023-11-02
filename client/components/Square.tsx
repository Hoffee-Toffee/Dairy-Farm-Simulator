import { useState, useEffect } from 'react'

function Square(prop) {
  const { state, index, grid, setGrid } = prop

  const handleClick = () => {
    if (state == 'ufo') {
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
    }
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
    <div
      id="square"
      onClick={handleClick}
      style={{
        margin: '5px',
      }}

      // onDoubleClick={handleDoubleClick}
      // onDragEnter={handleMouseDrag}
      // onContextMenu={handleRightClick}
    >
      {state}
    </div>
  )
}

export default Square
