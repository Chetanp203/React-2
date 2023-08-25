import React, { useContext } from 'react'
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
import Checkout from './Components/Checkout'
import AllProducts from './Components/AllProducts'
import AddProducts from './Components/AddProducts'
import { AuthContext } from './Context/Auth.context'


export const App = () => {
  const {state}= useContext(AuthContext);
  console.log(state?.user,"user here")
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='add-products' element={<AddProducts/>}/>
        <Route exact path='all-products' element={<AllProducts/>}/>
        <Route exact path='checkout' element={<Checkout/>}/>
        <Route exact path='accessories' element={<Acceccories/>}/>
        <Route exact path='jewellery' element={<Jewellery/>}/>
        <Route exact path='gadgets' element={<Gadgets/>}/>
        <Route exact path='beauty' element={<Beauty/>}/>
        <Route exact path='homeandkitchen' element={<HomeAndKitchen/>}/>
        <Route exact path='kidswear' element={<KidsWear/>}/>
        <Route exact path='/womenclothing' element={<WomenClothing/>}/>
        <Route exact path='/bag' element={<Bag/>} />
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route exact path='/menstshirt' element={<MensTshirt/>}/>
        <Route exact path='/menswear' element={<MensWear/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
export default App