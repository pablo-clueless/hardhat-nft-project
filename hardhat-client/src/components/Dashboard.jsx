import React, { useEffect, useState } from 'react'
// import Moralis from 'moralis'
// import { useMoralis } from 'react-moralis'
import { useNavigate } from 'react-router-dom'
// import Web3 from 'web3'

import abi from '../contracts/ArtWork.json'

const contractAdddress = import.meta.env.VITE_CONTRACT_ADDRESS
const contractABI = abi.abi

// const web3 = new Web3(window.ethereum)

const Dashboard = () => {
  // const { isAuthenticated, logout, user } = useMoralis()
  const navigate = useNavigate()

  const [inputValue, setinputValue] = useState({ name: '', description: '', file: null })
  const [yourWalletAddress, setYourWalletAddress] = useState(null)
  const [error, setError] = useState(null)

  const { name, description, file } = inputValue

  // useEffect(() => {
  //   if(!isAuthenticated) {
  //     navigate('/')
  //   }
  // },[isAuthenticated])

  const handleInputValue = (e) => {
    setinputValue(initialState => ({ ...initialState, [e.target.name]: e.target.value}))
  }

  const handleFileUpload = (e) => {
    setinputValue(initialState => ({ ...initialState, [e.target.name]: e.target.files[0]}))
  }

  // const submitHandler = async (e) => {
  //   e.preventDefault()

  //   if(!name || !description || !file) return alert('Plese fill all fields!')
    
  //   try {
  //       const file1 = new Moralis.File(file.name, file)
  //       await file1.saveIPFS()
  //       const file1Url = file1.ipfs()

  //       const metadata = { name, description, image: file1Url }

  //       const file2 = new Moralis.File(`${name}metadata.json`, {
  //         base64: Buffer.from(JSON.stringify(metadata)).toString(base64)
  //       })

  //       await file2.saveIPFS()
  //       const metadataUrl = file2.ipfs()

  //       const contract = web3.eth.Contract(contractABI ,contractAdddress)
  //       const res = await contract.methods.mint(metadataUrl).send({ from: user.get('ethAddress') })
  //       const tokenId = res.events.Transfer.returnValues.tokenId

  //       alert(`NFT minted successfully. Contract Address - ${contractAdddress}, Token ID - ${tokenId}`)
  //   } catch (error) {
  //     setError(error)
  //     console.log(error)
  //     alert('an error occurred!')
  //   }
  // }

  const submitHandler = (e) =>{
    e.preventDefault()
    
    if(!name || !description || !file) return alert('Please fill all fields!')

    const formData = { name, description, image: file }

    console.log('Upload successful!', formData)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="name" value={name} onChange={handleInputValue} />
        <input type="text" name="description" value={description} onChange={handleInputValue} />
        <input type="file" name="file" value={file} onChange={handleFileUpload} />
        <button type='submit'>mint nft</button>
      </form>
    </div>
  )
}

export default Dashboard