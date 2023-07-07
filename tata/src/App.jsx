import React from 'react'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Footer from './Components/Footer'
import MensWear from './Components/MensWear'
import MensTshirt from './Components/MensTshirt'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/menstshirt' element={<MensTshirt/>}/>
        <Route exact path='/menswear' element={<MensWear/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
export default App