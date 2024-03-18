import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/Header'
import Main from './componentes/Main'
import Footer from './componentes/Footer'
import './global.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer></Footer>
  </React.StrictMode>,
)
