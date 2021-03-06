import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ethers } from 'ethers'

import abi from '../contracts/Collectible.json'
import { Buttons, ImagePicker, InputField, Modal } from '../components'

const contractAdddress = import.meta.env.VITE_CONTRACT_ADDRESS
const contractABI = abi.abi

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '87vh',
  },
  form: {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '1rem 0',
    margin: '1rem 0'
  }
})

const Dashboard = ({ isWalletConnected, connectWallet, minterAddress }) => {
  const navigate = useNavigate()
  const classes = useStyles()

  const [inputValue, setInputValue] = useState({ name: '', description: '', file: null })
  const [error, setError] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [transacting, setTransacting] = useState({ minting: false, minted: false, })
  const [mintedNFTAddrress, setMintedNFTAddrress] = useState('')

  const { name, description, file } = inputValue
  const { minting, minted } = transacting

  useEffect(() => {
    if(!isWalletConnected) {
      connectWallet()
    }
  },[isWalletConnected])

  const handleInputValue = (e) => {
    setInputValue(initialState => ({ ...initialState, [e.target.name]: e.target.value}))
  }

  const handleFileUpload = (e) => {
    let pickedFile
    pickedFile = e.target.files[0]

    const { type } = pickedFile
    if(type == 'image/png' || type == 'image/svg' || type == 'image/jpeg' || type == 'image/gif' || type == 'image/tiff') {
      setInputValue(initialState => ({ ...initialState, file: pickedFile }))
      const fileReader = new FileReader()
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result)
      }
      fileReader.readAsDataURL(pickedFile)
    } else {
        return setError('Wrong file type!')
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    setTransacting(initialState => ({ ...initialState, minting: true }))
    try {
      const jsonFile = JSON.stringify({ name, description, file: previewUrl })
      
      if(window.ethereum) {
        // const provider = new ethers.providers.Web3Provider(window.ethereum)
        // const signer = provider.getSigner()
        // const contract = new ethers.Contract(contractAdddress, contractABI, signer)
        // const txn = await contract.mintNFT(minterAddress, jsonFile)
        // const res = await txn.wait()
        // setMintedNFTAddrress(res.transactionHash)
        setTransacting(initialState => ({ ...initialState, minting: false, minted: true }))
        setInputValue(initialState => ({ ...initialState, name: '', description: '', file: null }))
      } else {
        setError('Please install a MetaMask wallet!')
      }
    } catch (error) {
      setError(error)
      console.log(error)
    }
  }

  const clearImage = () => setInputValue(initialState => ({ ...initialState, file: null }))
  const clearError = () => setError(null)
  const closeMinted = () => setTransacting(initialState => ({ ...initialState, minted: false, minting: false }))

  return (
    <div className={classes.main}>
      {error && <Modal message={error} onClear={clearError} />}
      {minting && <Modal message='Minting your NFT' onClear={closeMinted} /> }
      {minted && <Modal message='NFT Minted' onClear={closeMinted} />}
      <Stack direction='column' spacing={2} textAlign='center'>
        <Typography variant='body1' color='textPrimary'>
          Your Wallet Address: {minterAddress}
        </Typography>
      </Stack>

      <form onSubmit={submitHandler} className={classes.form}>
        <InputField type='text' label='Name' name='name' value={name} onChange={handleInputValue} placeholder='NFT Name' />

        <InputField type='text' label='Description' name='description' value={description} onChange={handleInputValue} placeholder='NFT Description' />

        <ImagePicker isValid={file} name='file' onChange={handleFileUpload} src={previewUrl} onClick={clearImage} />

        <Buttons type='submit' text='Mint NFT' disabled={!name || !description || !file} />
      </form>

      {mintedNFTAddrress && <Typography variant='subtitle1'>
        <a href={`https://rinkeby.etherscan.io/tx/${mintedNFTAddrress}`}>
          View transaction on Rinkeby Etherscan to claim 
        </a>
      </Typography>}
    </div>
  )
}

export default Dashboard