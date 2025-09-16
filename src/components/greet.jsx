import React from 'react'

const Greet=()=>{
  const my_name="PRATHAP YADAV";
  const multiply=(a,b)=>a*b;
  const Special_class="new_class";
  const numbers=[1,2,3,4,5,643,3654,654]
  const person=[{name:"prathap",age:21
  },{name:"rahul",age:22},{name:"ram",age:28}]
  return(
    <>
    <h1>{my_name}</h1>
    <p>4*4={multiply(4,4)}</p>
    <p className={Special_class}>This is a special class </p>
    <p>person:{[1,3,5,"hi"]}</p>
    {numbers.map(numbers =>(
        <ul key={Math.random()*10}>
        <li>{numbers}</li>
      </ul>
  
    ))

    }
    {person.map((name)=>(
      <ul key={Math.random()*10}>
        <li>{name.name}</li>
        <li>{name.age}</li>
      </ul>
    ))

    }
    </>
    
  )
  
}
export default Greet;
