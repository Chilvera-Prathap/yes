import React from 'react'
import { useState,useEffect } from 'react'
import "./style.css"


function Calc() {
    const [inputValue,setinputValue]=useState("")

    function display(value){
      setinputValue((inputValue)=>inputValue+value)
    }
  
    function calculate(){
      try{
      let answers=eval(inputValue)
      setinputValue(answers)
      }catch{
      setinputValue("error")
    }
    }

    function remove(){
      setinputValue((value)=>inputValue.slice(0,-1))
      
    }

    function clear(){
      setinputValue("")
    }


  useEffect(() => {
  const handleKeyDown = (event) => {
    const key = event.key

    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
      display(key)
    }

    if (key === "Enter" || key === "=") {
      calculate()
    }
    if (key === "Backspace") {
      remove()
   
    }
  
    if (key.toLowerCase() === "c" || key === "Escape") {
      clear()
    }
  }

  window.addEventListener("keydown", handleKeyDown)

  return () => {
    window.removeEventListener("keydown", handleKeyDown)
  }
}, [inputValue])

  return (
    <>
    <div className='outer'>
      <form name='calc' className='calculator'>
        <input type="text" className='value'  value={inputValue} readOnly  />
        <span className='num_clear' onClick={clear}>c</span>
        <span onClick={remove}>X</span>
        <span onClick={()=>display("/")}>/</span>
        
        
        <span onClick={()=>display("7")}>7</span>
        <span onClick={()=>display("8")}>8</span>
        <span onClick={()=>display("9")}>9</span>
        
        <span onClick={()=>display("*")}>*</span>
        <span onClick={()=>display("4")}>4</span>
        <span onClick={()=>display("5")}>5</span>
        <span onClick={()=>display("6")}>6</span>
        
        <span onClick={()=>display("-")}>-</span>
        <span onClick={()=>display("1")}>1</span>
        <span onClick={()=>display("2")}>2</span>
        <span onClick={()=>display("3")}>3</span>
        <span onClick={()=>display("+")} className='plus'>+</span>
        
        <span onClick={()=>display("0")}>0</span>
        <span onClick={()=>display("00")}>00</span>
        <span className='equal'  onClick={calculate}>=</span>
    </form>
    </div>
    </>
  )
}

export default Calc





