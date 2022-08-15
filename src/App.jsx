import { useState } from 'react'
import Home from './components/Home'
import SidderBar from './components/SidderBar'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout'
import Gastos from './pages/Gastos'
import Prestamos from './pages/Prestamos'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}  />
            <Route path='/Gastos' element={<Gastos/>} />
            <Route path='/Prestamos' element={<Prestamos/>} />

        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
