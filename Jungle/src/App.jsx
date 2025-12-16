import { useState } from 'react'

import JungleBlasterWeb from './components/JungleBlasterWeb'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <JungleBlasterWeb />
    </>
  )
}

export default App
