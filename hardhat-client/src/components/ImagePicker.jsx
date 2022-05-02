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
        width: '80%',
        height: '75%',
        objectFit: 'cover',
        border: '1px solid var(--light)'
    },
    label: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        color: 'var(--light)',
        textAlign: 'center',
        '& p': {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
        }
    },
    input: {
        width: '100%',
        height: '100%',
        display: 'none'
    }
})

const ImagePicker = ({ isValid, name, onChange, onClick, src }) => {
    const classes = useStyles()

  return (
    <div className={classes.imageControl}>
        {!isValid ?
        <label className={classes.label}>
                <p><CloudUploadOutlined /> Upload file</p>
                <i>.png, .jpg, .jpeg, .svg, .webp, .gif and .tiff only.</i>
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