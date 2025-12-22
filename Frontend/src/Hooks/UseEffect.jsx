import React, { useState } from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("");
      useEffect ( () =>{
    console.log("UseEffect Mounted")
  },[count,value])
  return (
    <>
    <div>UseEffect</div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Inc</button>
    </>

  )
}

export default UseEffect

