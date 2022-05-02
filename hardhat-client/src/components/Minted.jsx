import React from 'react'
import {} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '87vh',
  }
})

const Minted = () => {
  const classes = useStyles()

  return (
    <div className={classes.main}>
      Minted
    </div>
  )
}

export default Minted