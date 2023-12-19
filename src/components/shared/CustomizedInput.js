import { TextField } from '@mui/material'
import React from 'react'

function CustomizedInput(props) {
    return (
        <>
            <TextField
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                name={props.name} type={props.type} label={props.label} InputProps={{ style: {   width: "400px",
                borderRadius: 10,
                fontSize: 20,
                color: "white"} }} /></>
    )
}

export default CustomizedInput