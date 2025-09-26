import React from 'react'
import { useState } from 'react'
import "./style.css"

const generated=()=>{
    return Math.floor(Math.random()*100);
}

function todo() {
    const [todo,setTodo]=useState([])
    const[input,setInput]=useState("")

    const handleSubmit=()=>{   
        if(input===""){
            return alert(`todo is empty`);
        }
        setTodo(todo=>
            todo.concat({text:input,id:generated()})
        )
        setInput("")
    }
    const handleremove=(id)=>{
        setTodo((todo)=>todo.filter((t)=>t.id!==id))
    }
  return (
    <>
    <div className='container'>
        <input type="text" value={input} placeholder='New Todo' onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>

        <ul>
            {
                todo.map(({text,id})=>{
                    return(
                        <li key={id}>
                        <span>{text}</span>
                        <button onClick={()=>handleremove(id)}>X</button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    </>
  )
}

export default todo
