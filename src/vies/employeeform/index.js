import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import BasicTextFields from '../../components/input'
import CustomButton from '../../components/button'

function EmployeeForm(){
    let history = useHistory();
    const [profileName,setName]=useState('')
    const [education,setEdu]=useState('')
    const [degree,setDegree]=useState('')
    const [school,setSchool]=useState('')
    const [num,setNum]=useState('')
    const [adress,setAdress]=useState('')
    const [age,setAge]=useState('')

    const fullName=(e)=>{
      const val=e.target.value
      setName(val)

    }

    const highestEducation=(e)=>{
     const val = e.target.value
     setEdu(val)

    }

    const lastDegree=(e)=>{
     const val = e.target.value
     setDegree(val)

    }

    const lastSchool=(e)=>{
        const val = e.target.value
        setSchool(val)
   
       }

    const number=(e)=>{
        const val = e.target.value
        setNum(val)
   
       }

    const currentAdress=(e)=>{
        const val = e.target.value
        setAdress(val)
   
       }

    const yourAge=(e)=>{
        const val = e.target.value
        setAge(val)
   
       }

       const profileInfo={
           profileName,
           education,
           degree,
           school,
           num,
           adress,
           age
       }

    const submit=()=>{
        localStorage.setItem('info',profileInfo)
        alert('Your Information have been saved,Thankyou')
        history.push('/dashboardemployee')
    }   
    
    return(
        <>
        <div style={{backgroundColor:'#01064f',height:'4rem'}}>
            <h1 style={{color:'white'}}>Enter Your Correct Information</h1>
        </div>

        <div>
            <BasicTextFields onChange={fullName} id='standard-basic' label='Enter Your Full Name' />

        </div>
        <div>
            <BasicTextFields onChange={highestEducation} id='standard-basic' label='Enter highest Education' />

        </div>
        <div>
            <BasicTextFields onChange={lastDegree} id='standard-basic' label='Enter Last Degree Name' />

        </div>
        <div>
            <BasicTextFields onChange={lastSchool} id='standard-basic' label='Enter Last School Name' />

        </div>
        <div>
            <BasicTextFields onChange={number} id='standard-basic' label='Enter Mobile Number' type='number' />

        </div>
        <div>
            <BasicTextFields onChange={currentAdress} id='standard-basic' label='Enter Your Current adress' />

        </div>
        <div>
            <BasicTextFields onChange={yourAge} id='standard-basic' label='Enter Your Age' type='number' />

        </div>
        <div>
            <CustomButton onClick={submit} text='Submit' variant='contained' color='primary'/>

        </div>



        </>
    )
}

export default EmployeeForm