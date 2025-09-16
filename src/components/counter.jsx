import React from 'react'
import { useState } from 'react'
import './style.css'

function Counter() {
    const [count,setcount]=useState(0)
    const increment=()=>setcount(count+1)
    const decrement=()=>setcount(count-1)
    const reset=()=>setcount(0)
  return (
    <>
    <div className='outer'>
      <h1>{count}</h1>
      
        
        <button onClick={increment} className='increment'>+</button>
        <button onClick={reset} className='reset'>Reset</button>
        <button onClick={decrement} className='decrement'>-</button>
        
    </div>
    </>
  )
}

export default Counter
