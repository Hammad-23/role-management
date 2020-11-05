import React from 'react'
import { useHistory } from "react-router-dom";
import CustomButton from '../../components/button'
import FloatingActionButtons from '../../components/floatingbutton'
import ButtonAppBar from '../../components/navbar'


function DashboardEmployee(){
    let history = useHistory();
    
    return(
       
        <>
        <ButtonAppBar text='Dashboard Of Employee' title='Log Out'/>
         
        
         <FloatingActionButtons color='primary'/>


        </>
    )
}

export default DashboardEmployee