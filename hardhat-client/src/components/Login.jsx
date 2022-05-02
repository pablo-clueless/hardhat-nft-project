import React, { useEffect } from 'react'
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

const Login = ({ isWalletConnected, connectWallet }) => {
    const navigate = useNavigate()

    const classes = useStyles()
  
    useEffect(() => {
      if(isWalletConnected){
        navigate('/dashboard')
      }
    },[isWalletConnected])

  return (
    <div className={classes.main}>
        <Button variant='contained' onClick={() => connectWallet}>
          Login With MetaMask
        </Button>
    </div>
  )
}

export default Login