import React from 'react'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    buttonControl: {
        width: '80%',
        margin: '1rem 0'
    }
})

const Buttons = ({ type, text, onClick, disabled }) => {
    const classes = useStyles()

  return (
    <div className={classes.buttonControl}>
        <Button fullWidth variant='contained' type={type} onClick={onClick} disabled={disabled}>
            {text}
        </Button>
    </div>
  )
}

export default Buttons