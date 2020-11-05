import React from 'react'
import { useHistory } from "react-router-dom";


function DashboardCompany(){
    let history = useHistory();
    const signOut=()=>{
        localStorage.removeItem('option')
        history.replace('/')
        
}
    return(
        <>
         <h1>Dashboard Of Company</h1>
         <button onClick={signOut}>Log Out</button>

        </>
    )
}

export default DashboardCompany