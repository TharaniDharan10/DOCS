import React from 'react'
import Foreground from './Components/Foreground'
import Background from './Components/Background'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
    <Background/>
    <Foreground/>
    </div>
  )
}

export default App