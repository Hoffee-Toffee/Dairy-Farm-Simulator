import Square from './Square'
import { useState } from 'react'

function App() {
  const gridLength = 300
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

  const [grid, setGrid] = useState(gridStates)

  console.log(grid)

  squares = grid.map((square, index) => (
    <Square state={square} index={index} grid={grid} setGrid={setGrid} />
  ))

  return (
    <>
      <div id="grid" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {...squares}
      </div>
    </>
  )
}

export default App
