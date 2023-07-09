import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='container1'>
        <div className="left1">
            <div>
                <h3>Menu</h3>
            </div>
            <div className="cat1">
            <i className="fa-regular fa-heart" style={{color: '#050505'}}></i>
            <p>My Wishlist</p>
            </div>
            <div className="cat1">
            <i className="fa-solid fa-suitcase-rolling" style={{color: '#0a0a0a'}}></i>
            <p>Order History</p>
            </div>
            <div className="cat1">
            <i className="fa-solid fa-n" style={{color: '#050505'}}></i>
            <p>NeuPass</p>
            </div>
            <div className="cat1">
            <i className="fa-regular fa-address-book" style={{color: '#050505'}}></i>
            <p>Address Book</p>
            </div>
            <div className="cat1">
            <i className="fa-solid fa-tag" style={{color: '#121212'}}></i>
            <p>Brands</p>
            </div>
            <div className="cat1">
            <i className="fa-regular fa-credit-card" style={{color: '#0c0d0d'}}></i>
            <p>Saved Payments</p>
            </div>
            <div className="cat1">
            <i className="fa-regular fa-bell" style={{color: '#050505'}}></i>
            <p>Alert & Coupons</p>
            </div>
            <div className="cat1">
            <i className="fa-brands fa-cc-amex" style={{color: '#030303'}}></i>
            <p>Gift Card</p>
            </div>
            <div className="cat1">
            <i className="fa-solid fa-indian-rupee-sign" style={{color: '#080808'}}></i>
            <p>CliQ Cash</p>
            </div>
            <div className="cat1">
            <i className="fa-regular fa-address-book" style={{color: '#050505'}}></i>
            <p>Manage Notifications</p>
            </div>
            <div className="cat1">
            <i className="fa-solid fa-gear" style={{color: '#f80d72'}}></i>
            <p className='pink'> Profile</p>
            </div>


        </div>




        <div className="mid1">
            <div>
                <h3>General Information</h3>
            </div>
            <br />
            <div>
                <h4>Basic Details</h4>
            </div>
            <br />
            <div className="details">
                <div className='flex space'>
                    <p>First Name</p>
                    <input type="text" placeholder='Chetan' />
                </div>
                <div className='flex space'>
                    <p>Last  Name</p>
                    <input type="text" placeholder=' Patil' />
                </div>
                <div className='flex space'>
                    <p>Date Of Birth</p>
                    <input type="text" placeholder='dd-mm-yyyy' />
                </div>
            </div>
            <br />
            <div className='flex space'>
                <h4>Contact Details</h4>
                <p className="pink">Edit</p>
            </div>
            <br />
            <div className="details">
                <div className='flex space'>
                    <p>Mobile Number</p>
                    <input type="text" placeholder='+91-9004003518' />
                </div>
                <div className='flex space'>
                    <p>Email</p>
                    <input type="text" placeholder=' patil.chetan1994@gmail.com' />
                </div>
            </div>
            <br />
            <div className='flex space'>
                <h4>Personal Details</h4>
                <p className="pink">Add</p>
            </div>
            <br />
            <div className="details">
                <div className='flex space'>
                    <p>Gender</p>
                    <input type="text"  />
                </div>
                
            </div>

        </div>




        <div className="right2">
            <button>C</button>
            <h3>Chetan Patil</h3>
            <span>0 <span style={{fontSize:12}}>NeuCoins</span></span>
            <p>patil.chetan1994@gmail.com</p>
        </div>

    </div>
  )
}

export default Profile