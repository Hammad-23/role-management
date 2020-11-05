import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import {loginUser} from '../../config/firebase'
import BasicTextFields from '../../components/input'
import CustomButton from '../../components/button'




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

    const onLogin = async function(){

        try{
            await loginUser(email,password)
            alert('User Successfully Logged In!')
            const take=  localStorage.getItem('option')
            if(take==='Company'){
              history.replace('/dashboardcompany')
            }else{
              history.replace('/dashboardemployee')
            }
            
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
           Log In
         </div>
         <div style={{marginTop:'3rem'}}>
           <BasicTextFields onChange={emailVal} id='standard-basic' label='Enter Email' />
         </div>
         <div style={{marginTop: '2rem'}}>
           <BasicTextFields onChange={passVal} id='standard-basic' label='Enter password' type='password' />
         </div>
         <div style={{marginTop: '2rem'}}>
           <CustomButton onClick={onLogin} variant='contained' color='primary' text='Log In' />
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