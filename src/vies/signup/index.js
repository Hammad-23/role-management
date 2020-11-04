import React from 'react'
import { useHistory } from "react-router-dom";


function SignUp(){
    let history = useHistory();
    const name=()=>{

    }
    const email=()=>{

    }
    const pass=()=>{

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
                  Sign Up
                </div>
                <div style={{marginTop:'3rem'}}>
                  <input onChange={name} style={{height: '2rem',borderRadius: '10px'}} type='text' placeholder='Enter Name'/>
                </div>
                <div style={{marginTop:'2rem'}}>
                    <label>Select Role:</label>
                    <select>
                        <option>Company</option>
                        <option>Employee</option>
                    </select>
                </div>
                <div style={{marginTop:'2rem'}}>
                  <input onChange={email} style={{height: '2rem',borderRadius: '10px'}} type='text' placeholder='Enter Email'/>
                </div>
                <div style={{marginTop: '2rem'}}>
                  <input onChange={pass} style={{height: '2rem',borderRadius: '10px'}} type='password' placeholder='Enter password'/>
                </div>
                <div style={{marginTop: '2rem'}}>
                  <button onClick={()=>{history.push('/')}} style={{height:'2rem',width:'5rem',borderRadius: '15px',backgroundColor: 'turquoise',border: 'none'}}>Sign Up</button>
                </div>
              </div>
       
              </div>
             
           </div>




        </>
    )
}
export default SignUp