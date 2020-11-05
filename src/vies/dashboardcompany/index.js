import React from 'react'
import { useHistory } from "react-router-dom";
import CustomButton from '../../components/button'


function DashboardCompany(){
    let history = useHistory();
    const signOut=()=>{
        localStorage.removeItem('option')
        history.replace('/')
        
}
    return(
        <>
         <h1>Dashboard Of Company</h1>
         <CustomButton onClick={signOut} text='Log Out' variant='contained' color='primary' />

        </>
    )
}

export default DashboardCompany