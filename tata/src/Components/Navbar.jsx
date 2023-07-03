import React from 'react'
import './NavbarCss.css'

export const Navbar = () => {
  return (
    <div className='nav '>
        <img src="./src/Components/download.png"  />
        <div className='nav-in'>
            <div className='nav-in-1'>
                <h5>Tata CLiQ Luxury</h5>
                <ul>
                    <li>CLiQ Cash</li>
                    <li>Gift Card</li>
                    <li>CLiQ Care</li>
                    <li>Track Orders</li>
                    <li>Sign in/Sign Up</li>
                    
                </ul>
            </div>
            <div className='nav-in-2'>
                <h3>Catergories</h3>
                <h3>Brands</h3>
                <div className='input'>
                <i className="fa-solid fa-magnifying-glass search" style={{color: '#d9d9d9'}}></i>
                <input type="text" className='searchbox' placeholder='Search for products' />
                </div>
                <i className="fa-regular fa-heart fa-xl" style={{color: '#ffffff'}}></i>
                <i className="fa-solid fa-suitcase-rolling bag fa-xl" style={{color:' #ffffff'}}></i>
            </div>
        </div>

    </div>
  )
}
export default Navbar;
