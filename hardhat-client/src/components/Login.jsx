import React, { useEffect } from 'react'
// import { useMoralis } from 'react-moralis'
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
    // const { authenticate, isAuthenticated, logout } = useMoralis()
    const navigate = useNavigate()

    const classes = useStyles()
  
    // useEffect(() => {
    //   if(isAuthenticated){
    //     navigate('/dashboard')
    //   }
    // },[isAuthenticated])

  return (
    <div className={classes.main}>
        {/* <button onClick={authenticate}>
            Login with MetaMask
        </button> */}
        <Button variant='contained'>
          Login With MetaMask
        </Button>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d63d51" fill-opacity="1" d="M0,96L360,0L720,192L1080,96L1440,192L1440,320L1080,320L720,320L360,320L0,320Z"></path></svg> */}
    </div>
  )
}

export default Login