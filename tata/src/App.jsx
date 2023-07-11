import React from 'react'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Footer from './Components/Footer'
import MensWear from './Components/MensWear'
import MensTshirt from './Components/MensTshirt'
import SingleProduct from './Components/SingleProduct'
import Profile from './Components/Profile'
import Bag from './Components/Bag'
import WomenClothing from './Components/WomenClothing'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='womenclothing' element={<WomenClothing/>}/>
        <Route exact path='/bag' element={<Bag/>} />
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/singleproduct' element={<SingleProduct/>}/>
        <Route exact path='/menstshirt' element={<MensTshirt/>}/>
        <Route exact path='/menswear' element={<MensWear/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
export default App