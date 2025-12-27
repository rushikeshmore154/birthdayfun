import { useState } from 'react'
import PracticePage from './component/PracticePage.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>Happy Birthday Arjun</div>
      <PracticePage></PracticePage>
    </>
  )
}

export default App
