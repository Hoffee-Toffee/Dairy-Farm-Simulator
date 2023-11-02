import Square from './Square'
import { useState } from 'react'

function App() {
  const gridLength = 400
  const cowNum = 20

  let squares = Array(gridLength).fill(0)
  const gridStates = squares.map((square, index) => {
    let startingState = 'empty'
    if (Math.random() * gridLength < cowNum) {
      startingState = 'cow'
    }

    return startingState
  })

  // make array of cow index's
  const cows = []

  gridStates.forEach((state, index) => {
    if (state === 'cow') {
      cows.push(index)
    }
  })

  //Pick random cow index

  const ufoIndex = cows[Math.floor(Math.random() * cows.length)]
  gridStates[ufoIndex] = 'ufo'

  console.log(cows)
  console.log(ufoIndex)

  squares = squares.map((square, index) => (
    <Square startingState={gridStates[index]} />
  ))

  const [grid, setGrid] = useState(squares)
  console.log(gridStates)

  return (
    <>
      <div id="grid" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {...squares}
      </div>
    </>
  )
}

export default App
