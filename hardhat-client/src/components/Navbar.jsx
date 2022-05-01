import React from 'react'
import { Button, Stack, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Icon } from '@iconify/react'

const useStyles = makeStyles({
    nav: {
        backgroundColor: 'var(--dark)',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        padding: '1rem 2rem',
    },
    h1: {
        color: 'var(--base)'
    }
})

const Navbar = ({ isWalletConnected }) => {
    const classes = useStyles()

  return (
    <nav className={classes.nav}>
        <Toolbar className={classes.toolbar}>
            <h1 className={classes.h1}>NFT Minter</h1>
            
            <Button variant='outlined'>
                {isWalletConnected ? 'Wallet Connected 🔐' : 'Connect Wallet 🔓'}
            </Button>
        </Toolbar>
    </nav>
  )
}

export default Navbar