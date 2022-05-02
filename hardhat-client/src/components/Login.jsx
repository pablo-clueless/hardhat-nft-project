import React, { useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
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

const Login = () => {
    const { authenticate, isAuthenticated, logout } = useMoralis()
    const navigate = useNavigate()

    const classes = useStyles()
  
    useEffect(() => {
      if(isAuthenticated){
        navigate('/dashboard')
      }
    },[isAuthenticated])

  return (
    <div className={classes.main}>
        <Button variant='contained' onClick={() => authenticate()}>
          Login With MetaMask
        </Button>
    </div>
  )
}

export default Login