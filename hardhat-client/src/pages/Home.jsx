import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import { Alert, Button, Footer, ImagePicker, InputField, Modal } from '../components'
import { useFormInputs } from '../hooks/form-hook.js'
import { useProviderContext } from '../contexts/ContextProvider'
import abi from '../contracts/Collectible.json'
import { pinFileToIPFS, pinJSONToIPFS } from '../lib/pinata'

const initialState = { name: '', description: '' }

const contractABI = abi.abi
const contractAdddress = import.meta.env.VITE_CONTRACT_ADDRESS

const Home = ({isWalletConnected, minterAddress,connectWallet,openSeaProfile}) => {
    const { currentColor } = useProviderContext()
    const { inputs, handleInputChange } = useFormInputs(initialState)
    const [imageFile, setImageFile] = useState(null)
    const [previewURL, setPreviewURL] = useState(null)
    const [status, setStatus] = useState(null)
    const [success, setSuccess] = useState(null)
    
    useEffect(() => {
        !isWalletConnected && connectWallet()
    },[isWalletConnected])

    const handleImageSelect = async (e) => {
        let pickedFile
        pickedFile = e.target.files[0]
        const { type } = pickedFile
        if(type === 'image/png' || type ==='image/jpg' || type ==='image/jpeg' || type === 'image/svg' || type === 'image/gif') {
            const fileReader = new FileReader()
            fileReader.onload = () => setPreviewURL(fileReader.result)
            fileReader.readAsDataURL(pickedFile)
            setImageFile(pickedFile)
        } else {
            alert('Invalid file type!')
        }
    }
    
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        
        const {name, description} = inputs
        if(!name || !description) return alert('Make sure all fields are not empty!')
        if(!imageFile) return alert('Please select an image')
        setStatus('Pinning file to IPFS')
        const pinataMetaData = { name: `${name} - ${description}` }
        const ipfsImageHash = await pinFileToIPFS(imageFile, pinataMetaData)
        setStatus('File pinned to IPFS')
        setStatus('Pinning JSON to IPFS')
        const imageMetaData = { name, description, image: `ipfs://${ipfsImageHash}` }
        const ipfsJsonHash = await pinJSONToIPFS(imageMetaData)
        setStatus('JSON pinned to IPFS')
        try {
            setStatus('Minting your NFT')
            if(window.ethereum) {
              const provider = new ethers.providers.Web3Provider(window.ethereum)
              const signer = provider.getSigner()
              const contract = new ethers.Contract(contractAdddress, contractABI, signer)
              const txn = await contract.mintNFT(minterAddress, `ipfs://${ipfsJsonHash}`)
              const res = await txn.wait()
              setSuccess(res)
              setStatus('NFT minted successfully, you should find it on OpenSea!')
            } else {
                return alert('Please install a MetaMask wallet!')
            }
        } catch (error) {
            setStatus('An error occurred while minting your NFT')
            console.log(error)
        }
        setImageFile(null); setPreviewURL(null); setStatus(null)
    }

    const clearImage = () => {
        setPreviewURL(null)
        setImageFile(null)
    }

  return (
    <>
    {status && <Alert message={status} onClose={() => setStatus(null)} />}
    {success && <Modal title='Minting Complete' address={success.to} hash={success.transactionHash} />}
    <div className={style.wrapper}>
        <div className={style.headerContainer}>
            <p className={style.title}>Your ETH Address</p>
            <p className={style.address} style={{color: currentColor}}>
                {minterAddress}
            </p>
        </div>
        <form onSubmit={handleFormSubmit} className={style.form}>
            <InputField label='Name' type='text' name='name' onChange={handleInputChange} required />
            <InputField label='Description' type='textarea' name='description' onChange={handleInputChange} required />
            <ImagePicker name='image' onChange={handleImageSelect} onClick={clearImage} src={previewURL} />
            <Button type='submit' text='Submit' />
        </form>
        <div className='my-4'>
            <p className="text-center" style={{color: currentColor}}>
                <span className="text-black mt-5">Your NFT will be available at: </span>
                <a href={openSeaProfile} target="_blank" rel="noopener noreferrer" className='underline underline-offset-2'>
                    https://testnet.opensea.io
                </a>
            </p>
        </div>
        <Footer />
    </div>
    </>
  )
}

const style = {
    wrapper: `w-full flex flex-col items-center`,
    headerContainer: `text-center mt-4 mb-12`,
    title: `text-xl`,
    address: `md:text-2xl text-sm`,
    form: `md:w-1/2 sm:w-300 w-full flex flex-col items-center justify-center gap-4 px-4 md:px-0`,
}

export default Home