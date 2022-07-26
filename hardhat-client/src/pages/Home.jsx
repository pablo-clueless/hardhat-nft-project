import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import { Alert, Button, Footer, ImagePicker, InputField, Modal } from '../components'
import { useFormInputs } from '../hooks/form-hook.js'
import { useNFTStorage } from '../hooks/nft-storage'
import { useProviderContext } from '../contexts/ContextProvider'
import abi from '../contracts/Collectible.json'

const initialState = {
    name: '',
    description: '',
    image: '',
}

const contractABI = abi.abi
const contractAdddress = import.meta.env.VITE_CONTRACT_ADDRESS

const Home = ({isWalletConnected, minterAddress,connectWallet,openSeaProfile}) => {
    const { currentColor } = useProviderContext()
    const { inputs, handleInputChange } = useFormInputs(initialState)
    const { uploading, saveNFT, nftError, clearNFTError} = useNFTStorage()
    const [imageFile, setImageFile] = useState(null)
    const [previewURL, setPreviewURL] = useState(null)
    const [imageURL, setImageURL] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [error, setError] = useState(null)
    const [loadingStates, setLoadingStates] = useState({minting: false, done: false, hash: '', address: ''})
    
    useEffect(() => {
        !isWalletConnected && connectWallet()
    },[isWalletConnected])

    const handleImageSelect = async (e) => {
        let pickedFile
        pickedFile = e.target.files[0]
        const { type } = pickedFile
        if(type === 'image/png' || type ==='image/jpg' || type ==='image/jpeg' || type === 'image/svg' || type === 'iamge/webp' || type === 'image/gif') {
            const fileReader = new FileReader()
            fileReader.onload = () => setPreviewURL(fileReader.result)
            fileReader.readAsDataURL(pickedFile)
            setIsValid(true)
            setImageFile(pickedFile)
        } else {
            alert('Invalid file type!')
            setError('Invalid file type!')
            setIsValid(false)
        }
    }
    
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        
        const {name, description} = inputs
        if(!name || !description ){
            return setError('Make sure all fields are not empty!')
        }

        try {
            const data = await saveNFT(imageFile)
            const { value: { cid }} = data
            setImageURL(cid)
        } catch (error) {}
        
        setLoadingStates({...loadingStates, minting: true})
        try {
            const JSONFile = JSON.stringify({name, description, image: `https://ipfs/${imageURL}`})
            
            if(window.ethereum) {
              const provider = new ethers.providers.Web3Provider(window.ethereum)
              const signer = provider.getSigner()
              const contract = new ethers.Contract(contractAdddress, contractABI, signer)
              const txn = await contract.mintNFT(minterAddress, JSONFile)
              const res = await txn.wait()
              console.log(res)
              setLoadingStates({...loadingStates, minting: false, done: true, hash: res.transactionHash, address: res.to})
              resetValues()
            } else {
              setError('Please install a MetaMask wallet!')
            }
        } catch (error) {
            setError(error)
            console.log(error)
        }
    }

    const clearImage = () => {
        setPreviewURL(null)
        setIsValid(false)
    }

    const clearError = () => {
        setError(null)
        setIsValid(false)
    }

    const resetValues = () => {
        setImageFile(null)
        setPreviewURL(null)
        setImageURL('')
        setIsValid(false)
        inputs.name = ''
        inputs.description = ''
    }

  return (
    <>
    {error && <Alert type='warning' message={error} onClose={clearError} />}
    {nftError && <Alert type='error' message={nftError} onClose={clearNFTError} />}
    {uploading && <Alert type='info' message='Uploading...' />}
    {loadingStates.minting && <Alert type='info' message='Minting...' />}
    {loadingStates.done && <Modal title='Success' address={loadingStates.address} hash={loadingStates.hash} onClose={() => setLoadingStates({...loadingStates, done: false})} />}
    <div className='w-full flex flex-col items-center'>
        <div className='text-center mt-4 mb-12'>
            <p className='text-xl text-white'>Your ETH Address</p>
            <p className='md:text-2xl text-sm' style={{color: currentColor}}>
                {minterAddress}
            </p>
        </div>
        <form onSubmit={handleFormSubmit} className='md:w-1/2 sm:w-300 w-full flex flex-col items-center justify-center gap-4 px-4 md:px-0'>
            <InputField label='Name' type='text' name='name' onChange={handleInputChange} required />
            <InputField label='Description' type='textarea' name='description' onChange={handleInputChange} required />
            <ImagePicker isValid={isValid} name='image' onChange={handleImageSelect} onClick={clearImage} src={previewURL} />
            <Button type='submit' text='Submit' />
        </form>
        <div className='my-4'>
            <p className="text-center" style={{color: currentColor}}>
                <span className="text-white mt-5">Your NFT will be available at: </span>
                <a href={openSeaProfile} target="_blank" rel="noopener noreferrer">
                    testnet.openSea.opensea.io
                </a>
            </p>
        </div>
        <Footer />
    </div>
    </>
  )
}

export default Home