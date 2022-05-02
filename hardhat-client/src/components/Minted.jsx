import React from 'react'
import {} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '87vh',
    color: 'var(--light)'
  },
  nft_preview: {
    width: '60%',
    height: '60%',
    display: 'grid',
    placeItems: 'center',
    background: 'var(--base)',
    border: '2px solid var(--light)',
    margin: '1rem 0',
    '& img': {
      width: '95%',
      height: '95%',
      objectFit: 'cover',
      border: '1px solid var(--light)'
    }
  }
})

const Minted = ({ minterAddress, }) => {
  const classes = useStyles()

  return (
    <div className={classes.main}>
      <h4>Here is your minted NFT!</h4>
      <p>This NFT has been sent to {minterAddress}</p>

      <div className={classes.nft_preview}>
        <img src='/assets/dancing-lady.jpg' alt='minted-nft-image' />
      </div>
    </div>
  )
}

export default Minted