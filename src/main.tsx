import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const retryUrl = new URL(window.location.href)
if (retryUrl.searchParams.delete('__asset_retry')) {
  window.history.replaceState(window.history.state, '', retryUrl)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
