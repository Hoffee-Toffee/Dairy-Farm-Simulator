import { useState, useEffect } from 'react'

function Square() {
  const [image, setImage] = useState('')

  const handleClick = () => {
    // setColor('green')
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
      // onDoubleClick={handleDoubleClick}
      // onDragEnter={handleMouseDrag}
      // onContextMenu={handleRightClick}
    >
      Square
    </div>
  )
}

export default Square
