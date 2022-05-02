import React from 'react'
import ReactDOM from 'react-dom/client'
// import { MoralisProvider } from 'react-moralis'
import App from './App'
import './index.css'

const publicAppId = 'v4FStYzucO9cmsJYV5WLcgoGyYumelNKW5NL1YpR'
const publicServerUrl = 'https://iv5vwj6ofjs5.usemoralis.com:2053/server'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <MoralisProvider appId={publicAppId} serverUrl={publicServerUrl}>
  //   <App />
  // </MoralisProvider>
  <App />
)
