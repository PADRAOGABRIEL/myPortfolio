import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar/navbar'
import { Home } from './components/Home/home'
import { Portifolio } from './components/Portifólio/portifolio'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/portifolio' element={<Portifolio />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
