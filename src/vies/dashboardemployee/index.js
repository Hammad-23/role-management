import React from 'react'
import { useHistory } from "react-router-dom";


function DashboardEmployee(){
    let history = useHistory();
    const logOut=()=>{
            localStorage.removeItem('option')
            history.replace('/')
    }
    return(
       
        <>
         <h1>Dashboard Of Employee</h1>
         <button onClick={logOut}>Log Out</button>

        </>
    )
}

export default DashboardEmployee