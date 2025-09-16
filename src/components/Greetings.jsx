import React from 'react'

const ValidPassoword=()=><h2>Valid Password</h2>
const InValidPassoword=()=><h2>InValid Password</h2>
const Password=({isvalid})=>{
  // if(isvalid){
  //   return <ValidPassoword />
  // }
  // else{
  //   return <InValidPassoword />
  // }
  return isvalid? <ValidPassoword />: <InValidPassoword />
}
const Greetings = () => {
  return (
    <div>
      Hello Greetings ....
      <br />
      <img src="./rr.jpg" alt="RRR" />
      <Password isvalid={true}/>
    </div>  
  )
}
export default Greetings;