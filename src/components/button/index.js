import React from 'react'

import { Button } from '@material-ui/core'


function CustomButton(props){
    return(
        <>

    <Button onClick={props.onClick} variant={props.variant} color={props.color}>{props.text}</Button>

        </>
    )
}

export default CustomButton;