import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { CloudUploadOutlined } from '@mui/icons-material'
import Buttons from './Buttons'

const useStyles = makeStyles({
    imageControl: {
        width: '23rem',
        height: '23rem',
        border: '1px solid var(--base)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1rem 0',
        '&:hover' : {
            borderColor: 'black'
        },
        '&:active': {
            borderColor: 'var(--light)'
        }
    },
    preview: {
        width: '70%',
        height: '80%',
        objectFit: 'cover',
        border: '1px solid var(--light)'
    },
    label: {
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems:'center',
        color: 'var(--light)',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: '100%',
        display: 'none'
    },
    text: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    }
})

const ImagePicker = ({ isValid, name, onChange, onClick, src }) => {
    const classes = useStyles()

  return (
    <div className={classes.imageControl}>
        {!isValid ?
        <label className={classes.label}>
                <p className={classes.text}>
                    <CloudUploadOutlined /> Upload file
                </p>
            <input className={classes.input} type="file" name={name} onChange={onChange} />
        </label>
        :   <>
            <img src={src} className={classes.preview} />
            <Buttons onClick={onClick} text='Clear Image' />
            </>}
        
    </div>
  )
}

export default ImagePicker