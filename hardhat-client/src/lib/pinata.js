import axios from 'axios'

const pinata_key = import.meta.env.VITE_PINATA_KEY
const pinata_secret = import.meta.env.VITE_PINATA_SECRET

export const pinJSONToIPFS = async(json) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`
    return axios
    .post(url, json, {
        headers: {
            pinata_api_key: pinata_key,
            pinata_secret_api_key: pinata_secret,
        },
    })
    .then((response) => {
        console.log(response.data)
        return response.data.IpfsHash
    })
    .catch((err) => console.error(err))
}

export const pinFileToIPFS = async(file, pinataMetaData) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`
    let formData = new FormData()
    formData.append('file', file)
    formData.append('pinataMetaData', JSON.stringify(pinataMetaData))
    return axios
    .post(url, formData, {
        maxBodyLength: Infinity,
        headers: {
            pinata_api_key: pinata_key,
            pinata_secret_api_key: pinata_secret,
        },
    })
    .then((response) => {
        console.log(response.data)
        return response.data.IpfsHash
    })
}