import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import {registerUser} from '../../config/firebase'
import BasicTextFields from '../../components/input'
import CustomButton from '../../components/button'


function SignUp(){
    const [username,setName]=useState('')
    const [useremail,setUser]=useState('')
    const [userpass,setPassword]=useState('')
    const [opt,setOpt]=useState('')

    
    
    let history = useHistory();
    const name=(e)=>{
       const input = e.target.value
       setName(input)
    }
    const Uemail=(e)=>{
        const input = e.target.value
        setUser(input)
    }
    const pass=(e)=>{
        const input = e.target.value
        setPassword(input)
    }
    const handleSelect=(e)=>{
       const val=(e.target.value)
       localStorage.setItem('option',val)
       setOpt(val)
    }

    const allData={
        username,
        useremail,
        userpass,
        opt
    }

    // localStorage.setItem('Name', username)
    // localStorage.setItem('option')

    
    const onRegister = async function(){
        try{
            await registerUser(useremail,userpass)
            alert('User is registered Successfully!')
            
          
            history.replace('/')

        }catch(error){
            alert(error.message)
        }
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
                  <BasicTextFields onChange={name} id='standard-basic' label='Enter Name'/>
                </div>
                <div style={{marginTop:'2rem'}}>
                    <label>Select Role:</label>
                    <select onClick={handleSelect}>
                        <option value='Company'>Company</option>
                        <option value='Employee'>Employee</option>
                    </select>
                </div>
                <div style={{marginTop:'2rem'}}>
                  <BasicTextFields onChange={Uemail} id='standard-basic' label='Enter Email' />
                </div>
                <div style={{marginTop: '2rem'}}>
                  <BasicTextFields onChange={pass} id='standard-basic' label='Enter Password' type='password' />
                </div>
                <div style={{marginTop: '2rem'}}>
                  <CustomButton onClick={onRegister} text='Sign Up' variant='contained' color='primary' />
                </div>
              </div>
       
              </div>
             
           </div>




        </>
    )
}
export default SignUp