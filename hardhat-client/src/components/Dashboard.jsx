import React, { useEffect, useState } from 'react'
// import Moralis from 'moralis'
// import { useMoralis } from 'react-moralis'
import { useNavigate } from 'react-router-dom'
// import Web3 from 'web3'
import {} from '@mui/material'
import { makeStyles } from '@mui/styles'

import abi from '../contracts/ArtWork.json'
import { Buttons, ImagePicker, InputField} from '../components'
import { useRef } from 'react'

const contractAdddress = import.meta.env.VITE_CONTRACT_ADDRESS
const contractABI = abi.abi

// const web3 = new Web3(window.ethereum)

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

const Dashboard = () => {
  // const { isAuthenticated, logout, user } = useMoralis()
  const navigate = useNavigate()
  const classes = useStyles()
  const imageRef = useRef()

  const [inputValue, setInputValue] = useState({ name: '', description: '', file: null })
  const [yourWalletAddress, setYourWalletAddress] = useState(null)
  const [error, setError] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')


  const { name, description, file } = inputValue

  // useEffect(() => {
  //   if(!isAuthenticated) {
  //     navigate('/')
  //   }
  // },[isAuthenticated])

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
        return alert('Wrong file type!')
    }
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
    const formData = { name, description, image: file }
    console.log('Upload successful!', formData)
  }

  const clearImage = () => setInputValue(initialState => ({ ...initialState, file: null }))

  return (
    <div className={classes.main}>
      <form onSubmit={submitHandler} className={classes.form}>
        <InputField type='text' label='Name' name='name' value={name} onChange={handleInputValue} placeholder='NFT Name' />

        <InputField type='text' label='Description' name='description' value={description} onChange={handleInputValue} placeholder='NFT Description' />

        <ImagePicker isValid={file} name='file' onChange={handleFileUpload} src={previewUrl} onClick={clearImage} />

        <Buttons type='submit' text='Mint NFT' disabled={!name || !description || !file} />
      </form>
    </div>
  )
}

export default Dashboard