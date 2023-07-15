import React from 'react'
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='c-container' >
            <p style={{ fontSize: 30 }}><b>Checkout</b></p>

            <div className="in-con">
                <div className="c-left">

                    <div className="flex space">
                        <div className='flex' style={{ alignItems: 'center' }}>
                            <button style={{ borderRadius: '50%', border: '2px solid black', padding: "0px 7px" }}>1</button>
                            <p><b>Add Shipping Address</b></p>
                        </div>
                        <p>Clear All</p>
                    </div>

                    <div className="flex space">
                        <div className="one-l">
                            <div className="flex space">
                                <input type="text" placeholder='First Name (Required)*' />
                                <input type="text" placeholder='Last Name (Required)*' />
                            </div>

                            <input type="text" placeholder='City district (Required)*' className='ship' /><br />
                            <input type="text" placeholder='State (Required)*' className='ship' /><br />
                            <input type="text" placeholder='Landmark' className='ship' /><br />
                        </div>


                        <div className="one-r">
                            <input type="text" placeholder='Enter your PIN code (Required)*' className='ship' />
                            <input type="text" style={{ height: 150 }} className='ship' placeholder='Flat/House No,Floor,Building/Company/Apartment Name,Road/Street Name,Area,Colony,Sector Village Required' />

                            <input type="text" placeholder='+91 Phone/Mobile Number (Required)*' className='ship' />

                        </div>
                    </div>

                </div>

                <div className="c-right">

                </div>
            </div>
        </div>
    )
}

export default Checkout