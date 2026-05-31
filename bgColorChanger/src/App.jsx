import React from 'react'
import { useState } from 'react'

const App = () => {
  let [color, setColor] = useState('#e2eaf2')
  return (
    <div className = 'w-full h-screen' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: color}}>
      <div className="card w-96 bg-base-100 card-xs shadow-sm rounded-xl " style = {{height: '10vw', backgroundColor: 'white', display: 'flex', width: 'auto', justifyContent: 'center', alignItems:'center'}}>
        <button className='px-3 py-2 rounded-full mx-4 my-4 ' style={{backgroundColor: 'red', cursor:'pointer', color: '#e2eaf2'}} onClick={()=> setColor('red')}>Red</button>
        <button className='px-3 py-2 rounded-full mx-4 my-4 ' style={{backgroundColor: 'green', cursor:'pointer', color: '#e2eaf2'}} onClick={()=> setColor('green')}>Green</button>
        <button className='px-3 py-2 rounded-full mx-4 my-4 ' style={{backgroundColor: 'black', cursor:'pointer', color: '#e2eaf2'}} onClick={()=> setColor('black')}>Black </button>
        <button className='px-3 py-2 rounded-full mx-4 my-4 ' style={{backgroundColor: 'blue', cursor:'pointer', color: '#e2eaf2'}} onClick={()=> setColor('blue')}>Blue</button>
        <button className='px-3 py-2 rounded-full mx-4 my-4 ' style={{backgroundColor: 'yellow', cursor:'pointer', color: '#577491'}} onClick={()=> setColor('yellow')}>Yellow</button>
        <button className='px-3 py-2 rounded-full mx-4 my-4 ' style={{backgroundColor: 'purple', cursor:'pointer', color: '#e2eaf2'}} onClick={()=> setColor('purple')}>Purple</button>
        <button className='px-3 py-2 rounded-full mx-4 my-4 ' style={{backgroundColor: 'pink', cursor:'pointer', color: '#557ca2'}} onClick={()=> setColor('pink')}>Pink</button>
      </div>
    </div>
  )
}

export default App
