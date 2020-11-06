import React from 'react'
import { useHistory } from "react-router-dom";
import BasicTextFields from '../../components/input'
import CustomButton from '../../components/button'

function EmployeeForm(){
    let history = useHistory();
    return(
        <>
        <div style={{backgroundColor:'#01064f',height:'4rem'}}>
            <h1 style={{color:'white'}}>Enter Your Correct Information</h1>
        </div>

        <div>
            <BasicTextFields id='standard-basic' label='Enter Your Full Name' />

        </div>
        <div>
            <BasicTextFields id='standard-basic' label='Enter highest Education' />

        </div>
        <div>
            <BasicTextFields id='standard-basic' label='Enter Last Degree Name' />

        </div>
        <div>
            <BasicTextFields id='standard-basic' label='Enter Last School Name' />

        </div>
        <div>
            <BasicTextFields id='standard-basic' label='Enter Mobile Number' type='number' />

        </div>
        <div>
            <BasicTextFields id='standard-basic' label='Enter Your Current adress' />

        </div>
        <div>
            <BasicTextFields id='standard-basic' label='Enter Your Age' type='number' />

        </div>
        <div>
            <CustomButton onClick={()=>{history.push('/dashboardemployee')}} text='Submit' variant='contained' color='primary'/>

        </div>



        </>
    )
}

export default EmployeeForm