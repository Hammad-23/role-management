import React, { useState } from 'react'
import { useHistory } from "react-router-dom";




function LogIn(props){

    let history = useHistory();

    const [email,setEmail] =useState('')
    const [password,setPass]=useState('')
  
  
    const emailVal=(e)=>{
     const input = e.target.value
     setEmail(input)
     console.log(email)
    }
  
    const passVal=(e)=>{
     const input = e.target.value
     setPass(input)
     console.log(password)
    }

    return(
        <>

         <div className="App">

      <div style={{backgroundColor: 'darkblue',height: '5rem',display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{color: 'white'}}>Role Management</h1>
      </div>
      <div style={{display: 'flex',justifyContent:'center',alignItems: 'center',height:'20rem',marginTop: '5rem'}}>
       <div style={{border:'1px solid black',width:'30rem',borderRadius: '8px'}}>
         <div style={{backgroundColor:'green',height:'3rem',color: 'white',fontSize:'25px',borderRadius:'8px'}}>
           Log In
         </div>
         <div style={{marginTop:'3rem'}}>
           <input onChange={emailVal} style={{height: '2rem',borderRadius: '10px'}} type='text' placeholder='Enter Email'/>
         </div>
         <div style={{marginTop: '2rem'}}>
           <input onChange={passVal} style={{height: '2rem',borderRadius: '10px'}} type='password' placeholder='Enter password'/>
         </div>
         <div style={{marginTop: '2rem'}}>
           <button style={{height:'2rem',width:'5rem',borderRadius: '15px',backgroundColor: 'turquoise',border: 'none'}}>Log In</button>
         </div>
         <div  style={{marginTop: '2rem'}}>
             <h3>Don't have an account? <span onClick={()=>{history.push('/signup')}} style={{color: 'blue'}}>SignUp</span></h3>
         </div>
       </div>

       </div>
      
    </div>


        </>



    )
}

export default LogIn