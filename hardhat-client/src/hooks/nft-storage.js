import { useState } from 'react'

const token = import.meta.env.VITE_NFT_TOKEN

export const useNFTStorage = () => {
    const [uploading, setUploading] = useState(false)
    const [retrieving, setRetrieving] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [nftError, setError] = useState(null)
    
    const saveNFT = async(body = null,) => {
        setUploading(true)
        try {
            const response = await fetch('https://api.nft.storage/upload',{
                method: 'POST',
                body,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'image/*'
                }
            })
            const data = await response.json()
            if(!response.ok) {
                throw new Error(data.message)
            }
            setUploading(false)
            return data
        } catch (error) {
            setError(error.message)
            setUploading(false)
        }
    }

    const retrieveNFT = async(cid) => {
        setRetrieving(true)
        try {
            const response = await fetch(`https://api.nft.storage/${cid}`,{
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            if(!response.ok) {
                throw new Error(data.message)
            }
            setRetrieving(false)
            return data
        } catch (error) {
            setError(error.message)
            setRetrieving(false)
        }
        
    }

    const deleteNFT = async(cid) => {
        setDeleting(true)
        try {
            const response = await fetch(`https://api.nft.storage/${cid}`,{
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            if(!response.ok) {
                throw new Error(data.message)
            }
            setDeleting(false)
            return data
        } catch (error) {
            setError(error.message)
            setDeleting(false)
        }
    }

    const clearNFTError = () => setError(null)

    return { uploading, retrieving, deleting, saveNFT, retrieveNFT, deleteNFT, nftError, clearNFTError }
}