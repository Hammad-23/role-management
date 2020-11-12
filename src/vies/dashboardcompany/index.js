import React from 'react'
import { useHistory } from "react-router-dom";
import CustomButton from '../../components/button'
import ButtonAppBar from '../../components/navbar'


function DashboardCompany(){
    let history = useHistory();

    return(
        <>
        <ButtonAppBar text='Dashboard Of Company' title='Log Out'/>
        <div style={{marginTop:'3rem',display: 'flex',justifyContent: 'space-around'}}>
           <CustomButton onClick={()=>{history.push('/postjob')}} text='Post a Job' color='primary' variant='contained'/>
           <CustomButton text='See Notifications' color='primary' variant='contained'/>
           <CustomButton text='View Jobs' color='primary' variant='contained' />
        </div>

         
         

        </>
    )
}

export default DashboardCompany