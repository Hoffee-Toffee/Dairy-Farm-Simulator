import { useState, useEffect } from 'react'

function Square(prop) {
  const { startingState } = prop
  const [state, setState] = useState(startingState)

  const handleClick = () => {
    setState('cow')
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
