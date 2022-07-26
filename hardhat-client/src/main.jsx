import React from 'react'
import ReactDOM from 'react-dom'
// import { MoralisProvider } from 'react-moralis'

import App from './App'
import './index.css'
import { ContextProvider } from './contexts/ContextProvider'

const appID = 'yE05ie0mVtRV9mPbQemAAIkolcQSGgXLMAdUTjJ6'
const serverUrl = 'https://s7vfkbw8gsut.usemoralis.com:2053/server'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
