import Square from './Square'

function App() {
  const squares = Array(400).fill(<Square />)

  return (
    <>
      <div id="grid">{...squares}</div>
    </>
  )
}

export default App
