import React from 'react'
import { useParams } from 'react-router-dom'

import { NFTDATA } from '../assets'

const NFT = () => {
    const nftId = useParams().id
    const selecedNFT = NFTDATA.find(nft => nft.id === nftId)

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-2/3'>
        <div className='mt-20'>
          <img src={selecedNFT.image} alt={selecedNFT.name} className='w-full h-500 object-cover' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='p-4 w-full flex items-center justify-between'>
            <p className='text-white'>
              {selecedNFT.name}
            </p>
            <p className='text-white'>
              {selecedNFT.price}ETH
            </p>
          </div>
          <div className='my-1'>
            <p className='text-white'>
              {selecedNFT.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFT