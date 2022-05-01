import React from 'react'
import ReactDOM from 'react-dom/client'
// import { MoralisProvider } from 'react-moralis'
import App from './App'
import './index.css'

const publicAppId = import.meta.env.VITE_PUBLIC_APP_ID
const publicServerUrl = import.meta.env.VITE_PUBLIC_SERVER_URL

ReactDOM.createRoot(document.getElementById('root')).render(
  // <MoralisProvider appId={publicAppId} serverUrl={publicServerUrl}>
    <App />
  // </MoralisProvider>
)
