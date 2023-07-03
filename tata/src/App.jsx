import React from 'react'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Footer from './Components/Footer'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
export default App