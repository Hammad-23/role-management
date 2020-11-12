import React from 'react'
import CustomButton from '../../components/button'
import BasicTextFields from '../../components/input'
import BoxTextFields from '../../components/boxinput'



function PostJob(){
    return(
        <>
        <div style={{
            backgroundColor: 'darkblue',height: '5rem',
        display: 'flex',justifyContent: 'center',alignItems: 'center'
    
    }}>
            <h1 style={{color: 'white'}}>Post A Job</h1>
        </div>

        <div style={{marginTop: '5rem',display: 'flex',justifyContent: 'center'}}>

        <BasicTextFields
         
          id="standard-basic"
          label="Enter Job Title"
        />
        </div>

        <div style={{marginTop: '3rem',display: 'flex',justifyContent: 'center'}}>
            <BoxTextFields

              id='outlined-basic'
              label='Enter Job Description'
              variant='outlined'
            
            />
        </div>

        <div style={{marginTop: '3rem',display: 'flex',justifyContent: 'center'}}>
            <CustomButton

              color='primary'
              text='Post'
              variant='contained'
            
            />
        </div>






        </>
    )
}

export default PostJob