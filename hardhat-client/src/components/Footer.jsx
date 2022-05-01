import React from 'react'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    footer: {
        width: '100%',
        height: '6vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--base)',
        color: 'var(--light)',
        textAlign: 'center',
        '& a': {
          color: 'var(--dark)'
        }
    }
})

const Footer = () => {
    const classes= useStyles()

  return (
    <div className={classes.footer}>
      <p>
        Made with ❤️ by
        <Link to={'https://github.com/pablo-clueless'}> @pablo-clueless</Link>.
      </p>
    </div>
  )
}

export default Footer