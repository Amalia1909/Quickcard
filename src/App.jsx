import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stack from '@mui/system/Stack';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Meine Kenntnisse und Interessen</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Kenntnisse
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Interessen
        </button>
        <p>
          
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
    </> 
  )
}

export default App
