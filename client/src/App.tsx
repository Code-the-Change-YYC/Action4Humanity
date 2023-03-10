import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="text-3xl underline">
          Hello world!
        </div>
      </div>
    </>
  )
}

export default App
