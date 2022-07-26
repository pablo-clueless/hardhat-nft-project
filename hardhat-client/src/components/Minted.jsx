import React from 'react'

const Minted = ({minterAddress, src, name}) => {

  return (
    <div>
      <h4>Here is your minted NFT!</h4>
      <p>This NFT has been sent to {minterAddress}</p>

      <div>
        <img src={src} alt={name} />
      </div>
    </div>
  )
}

export default Minted