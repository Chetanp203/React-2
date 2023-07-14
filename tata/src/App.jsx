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
import KidsWear from './Components/KidsWear'
import HomeAndKitchen from './Components/HomeAndKitchen'
import Beauty from './Components/Beauty'
import Gadgets from './Components/Gadgets'
import Jewellery from './Components/Jewellery'
import Acceccories from './Components/Acceccories'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='accessories' element={<Acceccories/>}/>
        <Route exact path='jewellery' element={<Jewellery/>}/>
        <Route exact path='gadgets' element={<Gadgets/>}/>
        <Route exact path='beauty' element={<Beauty/>}/>
        <Route exact path='homeandkitchen' element={<HomeAndKitchen/>}/>
        <Route exact path='kidswear' element={<KidsWear/>}/>
        <Route exact path='/womenclothing' element={<WomenClothing/>}/>
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