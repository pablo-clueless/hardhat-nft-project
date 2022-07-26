import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ isWalletConnected, connectWallet }) => {
    const navigate = useNavigate()
  
    useEffect(() => {
      if(isWalletConnected){
        navigate('/dashboard')
      }
    },[isWalletConnected])

  return (
    <div className={classes.main}>
        <button onClick={() => connectWallet}>
          Login With MetaMask
        </button>
    </div>
  )
}

export default Login