import React from 'react'
import { useHistory } from "react-router-dom";
import CustomButton from '../../components/button'
import ButtonAppBar from '../../components/navbar'


function DashboardCompany(){
    let history = useHistory();

    return(
        <>
        <ButtonAppBar text='Dashboard Of Company' title='Log Out'/>
         
         

        </>
    )
}

export default DashboardCompany