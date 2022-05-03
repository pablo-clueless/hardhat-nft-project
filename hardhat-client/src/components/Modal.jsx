import React from 'react'
import { Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  modalContainer: {
    // width: '100vw',
    // height: '100vh',
    position: 'absolute',
    top: 90,
    left: '30%',
    display: 'grid',
    placeItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 2,
},
modal: {
    width: '40vw',
    display: 'grid',
    placeItems: 'center',
    gap: '1rem',
    textAlign: 'center',
    wordBreak: 'break-word',
    backgroundColor: 'var(--light)',
    color: 'var(--error)',
    padding: '1rem 0.5rem',
    borderRadius: '5px',
    transition: '0.5s ease',
  }
})

const Modal = ({ error, onClear }) => {
  const classes = useStyles()

  return (
    <div className={classes.modalContainer}>
      <div className={classes.modal}>
        <Typography variant='body1' color='text'>
          {error}
        </Typography>
        <Button variant='contained' onClick={onClear}>
            close
        </Button>
      </div>
    </div>
  )
}

export default Modal