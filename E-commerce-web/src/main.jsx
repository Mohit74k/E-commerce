import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import store from '../src/app/store.jsx'
import { Provider } from 'react-redux'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store} >
    <App />
  </Provider>,
  </StrictMode>
)
