import { useState } from 'react'

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
            setError(error)
            setUploading(false)
        }
    }

    const retrieveNFT = async(cid) => {
        setRetrieving(true)
        try {
            const response = await fetch(`https://api.nft.storage/${cid}`)
            const data = await response.json()
            if(!response.ok) {
                throw new Error(data.message)
            }
            setRetrieving(false)
            return data
        } catch (error) {
            setError(error)
            setRetrieving(false)
        }
        
    }

    const deleteNFT = async(cid) => {
        setDeleting(true)
        try {
            const response = await fetch(`https://api.nft.storage/${cid}`,{
                method: 'DELETE'
            })
            const data = await response.json()
            if(!response.ok) {
                throw new Error(data.message)
            }
            setDeleting(false)
            return data
        } catch (error) {
            setError(error)
            setDeleting(false)
        }
    }

    const clearNFTError = () => setError(null)

    return { uploading, retrieving, deleting, saveNFT, retrieveNFT, deleteNFT, nftError, clearNFTError }
}