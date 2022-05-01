import React, { useEffect } from 'react'
// import { useMoralis } from 'react-moralis'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    // const { authenticate, isAuthenticated, logout } = useMoralis()
    const navigate = useNavigate()
  
    // useEffect(() => {
    //   if(isAuthenticated){
    //     navigate('/dashboard')
    //   }
    // },[isAuthenticated])

  return (
    <div>
        {/* <button onClick={authenticate}>
            Login with MetaMask
        </button> */}
        <button>Login with metaMask</button>
    </div>
  )
}

export default Login