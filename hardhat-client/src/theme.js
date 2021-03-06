import { createTheme } from '@mui/material'

export const theme = createTheme({
    typography: {
        fontFamily: 'var(--base-font)'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '0.5rem 1rem',
                    borderRadius: '0px',
                    fontFamily: 'var(--base-font)',
                },
                contained: {
                    backgroundColor: 'var(--base)',
                    color: 'var(--light)',
                    transition: '0.3s ease',
                    textTransform: 'capitalize',
                    '&:hover': {
                        transform: 'translateY(5px)',
                        backgroundColor: 'var(--base)',
                        color: 'var(--light)'
                    },
                    '&:active': {
                        animation: 'pulse 1s infinite',
                        borderColor: 'var(--light)',
                        boxShadow: '0 0 0 1.5rem rgba(210, 189, 194, 0.5)'
                    },
                    '&:disabled': {
                        background: 'var(--mid)',
                        color: 'var(--light)',
                    },
                    '@keyrames pulse': {
                        '0%': {
                            boxShadow: '0 0 0 0 var(--light)'
                        }
                    },
                    '@media screen and (max-width: 800px)': {
                        fontSize: '0.7rem'
                    }
                },
                outlined: {
                    backgroundColor: 'transparent',
                    color: 'var(--light)',
                    transition: '0.3s ease',
                    textTransform: 'capitalize',
                    borderColor: 'var(--light)',
                    '&:hover': {
                        backgroundColor: 'var(transparent))',
                        color: 'var(--light)',
                        borderColor: 'var(--light)'
                    },
                    '@media screen and (max-width: 800px)': {
                        fontSize: '0.7rem'
                    }
                },
                text: {
                    backgroundColor: 'var(--transparent)',
                    color: 'var(--light)',
                    transition: '0.3s ease',
                    textTransform: 'capitalize',
                    borderColor: 'var(--error)',                    
                    marginTop: '0.5rem',
                    '&:hover': {
                        backgroundColor: 'var(--error)',
                        color: 'var(--light)',
                        borderColor: 'var(--error)',
                    },
                    '@media screen and (max-width: 800px)': {
                        fontSize: '0.7rem'
                    }
                }
            }
        }
    },
    palette: {
        text: {
            primary: '#d63d51',
            secondary: '#262550',
            error: '#c12110',
            success: '#18a73e',
        }
    }
})