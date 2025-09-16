import React, { useState } from 'react'
import "./style.css"
function HiddenSearchBar() {
    const[showinput,setShowinput]=useState(false)
    const[bgColor,setBgColor]=useState("white")

    const handleclick=e=>{
        setBgColor("#1a1a1a")
        if(e.target.className==="container"){
            setShowinput(false)
            setBgColor("#fff")
        }
    }
  return (
    <>
    <section className='container'style={{backgroundColor:bgColor}} onClick={handleclick}>
        {showinput?(
            <input type="text" placeholder='Search...' style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "300px",
            height: "100",
            background: {bgColor},
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding:"20px"
            
            
          }} />
        ):(<i className="fa-solid fa-magnifying-glass" onClick={()=>setShowinput(true)}></i>
        )}
    </section>
    </>
  )
}

export default HiddenSearchBar
