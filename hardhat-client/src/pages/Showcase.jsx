import React from 'react'

import { Card, Footer } from '../components'
import { NFTDATA } from '../assets/index'

const Showcase = ({minteraddress}) => {
  return (
    <div className='w-full flex flex-col items-center'>
        <div className='flex items-center justify-center flex-wrap gap-4 p-4 mb-20'>
            {NFTDATA.map((nft) => (
                <Card key={nft.id} {...nft}/>
            ))}
        </div>
        <Footer />
    </div>
  )
}

export default Showcase