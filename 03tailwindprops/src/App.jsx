import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-4 text-black mb-4'>TAILWIND CSS</h1>
      <Card username="Sumit_yadav" btn="Click me"/>
      <Card username="Sumit"/>
      

    </>
  )
}

export default App
