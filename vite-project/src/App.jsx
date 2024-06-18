import { useState } from 'react'
import './App.css'
import General from './General.jsx'
import Education from './Education.jsx'
import Practical from './Practical.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <General />
    <Education />
    <Practical />
    </>
  )
}

export default App
