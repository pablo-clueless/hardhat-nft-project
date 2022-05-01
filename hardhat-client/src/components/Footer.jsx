import React from 'react'
import {} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    footer: {
        width: '100%',
        height: '6vh',
        background: 'var(--base)'
    }
})

const Footer = () => {
    const classes= useStyles()

  return (
    <div className={classes.footer}>Footer</div>
  )
}

export default Footer