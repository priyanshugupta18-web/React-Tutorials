import React from 'react'
import { useState } from 'react'

const App = () => {
  let [color, setColor] = useState('#e2eaf2')
  return (
    <div className = {`w-full h-screen flex justify-center items-center bg-${color}-700 bg-${color}`}>
      <div className="bg-base-100 shadow-sm rounded-xl flex-col lg:flex-row bg-white flex justify-center items-center">
        <button className='px-3 py-2 rounded-full mx-4 my-4 cursor-pointer text-white bg-red-700'  onClick={()=> setColor('red')}>Red</button>
        <button className='px-3 py-2 rounded-full mx-4 my-4 cursor-pointer text-white bg-green-700'  onClick={()=> setColor('green')}>Green</button>
        <button className='px-3 py-2 rounded-full mx-4 my-4 cursor-pointer text-white bg-black'  onClick={()=> setColor('black')}>Black </button>
        <button className='px-3 py-2 rounded-full mx-4 my-4 cursor-pointer text-white bg-blue-700'  onClick={()=> setColor('blue')}>Blue</button>
        <button className='px-3 py-2 rounded-full mx-4 my-4 cursor-pointer text-white bg-yellow-700'  onClick={()=> setColor('yellow')}>Yellow</button>
        <button className='px-3 py-2 rounded-full mx-4 my-4 cursor-pointer text-white bg-purple-700'  onClick={()=> setColor('purple')}>Purple</button>
        <button className='px-3 py-2 rounded-full mx-4 my-4 cursor-pointer text-white bg-pink-700'  onClick={()=> setColor('pink')}>Pink</button>
      </div>
    </div>
  )
}

export default App
