import React, { useState } from 'react'
import "./style.css"

function Login_validation() {
    const [username,setUsername]=useState("Prathap")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

    const [errorusername,setErrorUsername]=useState("")
    const [erroremail,setErrorEmail]=useState("")
    const [errorpassword,setErrorPassword]=useState("")
    const [errorconfirmPassword,setErrorConfirmPassword]=useState("")

    const [userColor,setUserColor]=useState("")
    const [emailColor,setEmailColor]=useState("")
    const [passwordColor,setPasswordColor]=useState("")
    const [confirmPasswordColor,setConfirmPasswordColor]=useState("")

    function Validate(e){
        e.preventDefault()

        if(username.length>8){
            setErrorUsername("")
            setUserColor("green")
        }else{
            setErrorUsername("it contains 8 letters long")
            setUserColor("red")
        }

        if(email.includes("@gmail")){
            setErrorEmail("")
            setEmailColor("green")
        }else{
            setErrorEmail("email should have @gmail")
            setEmailColor("Red")
        }

        if(password.length>8){
            setErrorPassword("")
            setPasswordColor("green")
        }else{
            setErrorPassword("it contains 8 letters long")
            setPasswordColor("red")
        }
        if(password!=""&& password===confirmPassword){
            setErrorConfirmPassword("");
            setConfirmPasswordColor("green")
        }else{
            setErrorConfirmPassword("password did not match ")
            setConfirmPasswordColor("red")
        }


        
    }

  return (
    <>
    <div className='outer'>
      <form>
        <input type="text" placeholder='Name' style={{borderColor:userColor}} value={username} onChange={(e)=>setUsername(e.target.value)} />
        <p>{errorusername}</p>

        <input type="text" placeholder='email' style={{borderColor:emailColor}} value={email} onChange={(e)=>setEmail(e.target.value)} />
        <p>{erroremail}</p>

        <input type="password" placeholder='Password' style={{borderColor: passwordColor}} value={password} onChange={(e)=>setPassword(e.target.value)} />
        <p>{errorpassword}</p>

        <input type="password" placeholder='Confirm Password' style={{borderColor:confirmPasswordColor}} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
        <p>{errorconfirmPassword}</p>

        <button onClick={Validate}>Submit</button>

      </form>
    </div>
    </>
  )
}

export default Login_validation
