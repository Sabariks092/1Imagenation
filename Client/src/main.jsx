import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './Context/AppContext.jsx';
import { UserRegProvider } from './Context/UserRegContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <UserRegProvider>
        <App />
        </UserRegProvider>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
)
