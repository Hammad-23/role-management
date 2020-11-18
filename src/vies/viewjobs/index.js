import React from 'react'
import BasicTable from '../../components/table'


function ViewJobs(){
    return(
        <>
        <div style={{backgroundColor: 'darkblue',height: '6rem',display:'flex',
    justifyContent: 'space-around', alignItems: 'center'}}>
        <h1 style={{color: 'white'}}>Your Posted Jobs</h1>
        </div>
        <div style={{marginTop: '3rem'}}>
        <BasicTable/>
        </div>


        </>
    )
}

export default ViewJobs