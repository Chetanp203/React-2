import React from 'react'
import "./Bag.css"

const Bag = () => {
    return (
        <div className='b-container'>

            <div className="flex space" style={{ padding: 20, alignItems: 'center', backgroundColor: 'rgb(249,249,249)' }}>
                <p style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 40 }}>My Bag</p>
                <div className='flex space' style={{ width: 240 }}>
                    <p><b>Delhi, 110001</b></p>
                    <p>Change PIN code</p>

                </div>
            </div>

            <div className="b-con2">
                <p style={{ fontSize: 14, paddingLeft: 65, paddingTop: 20 }}>Apply a relevant <b>coupon code</b> here to avail any additional discount. Applicable <b>cashback </b> if any will be credited to your account as per T&C.</p>


                <div className="flex">
                    <div className="left-con">
                        <div className='cong'>
                            <p className="green">Congratulations NeuPass User!! Your order is eligible for <b>Free Shipping!</b></p>
                        </div>

                        <div className="flex save-wish" style={{ fontSize: 14, lineHeight: 2 }}>
                            <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg" className='bag-pro' />

                            <div style={{ padding: 10 }}>
                                <div className='flex'>
                                    <p>Puma ESS+ Black Cotton Regular Fit Printed T-shirt</p>
                                    <img src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg" className='del-icon' />
                                    <p>Delivery by <b>15th Jul</b> <span className='green' ><b >FREE</b></span></p>
                                </div>
                                <span><b>₹739.</b><del>₹1999</del><span className='green'><b>₹1260.00 Off</b></span>

                                </span>
                                <p>Color:Ivory</p>
                                <br />
                                <br />
                                <hr />
                                <div className="flex space" style={{ padding: 15 }}>
                                    <p>Quantity:1</p>
                                    <div className="flex space ">
                                        <p style={{ paddingRight: 30 }} >Save to wishlist</p>
                                        <p>Remove </p>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="flex save-wish" style={{ fontSize: 14, lineHeight: 2 }}>
                            <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016645596_437Wx649H_202302241106111.jpeg" className='bag-pro' />

                            <div style={{ padding: 10 }}>
                                <div className='flex'>
                                    <p>U.S.Polo Assn. Ivory Cotton Regular Fit Polo T-shirt</p>
                                    <img src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg" className='del-icon' />
                                    <p>Delivery by <b>16th Jul </b><span className='green' ><b >FREE</b></span></p>
                                </div>
                                <p><b>₹1899.00</b></p>
                                <p>Color:Black</p>
                                <br />
                                <br />
                                <hr />
                                <div className="flex space" style={{ padding: 15 }}>
                                    <p>Quantity:1</p>
                                    <div className="flex space ">
                                        <p style={{ paddingRight: 30 }}>Save to wishlist</p>
                                        <p>Remove </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <button>Continue Shopping</button>



                    </div>
                    <div className="right-con">
                        <div className="coupons">
                            <img src="https://www.tatacliq.com/src/general/components/img/coupon.png" style={{ width: 30, paddingRight: 10 }} />
                            <p><b>Check for Coupons</b></p>
                        </div>

                        <div className='check'>
                            <div className='check2'>
                                <div className='space flex'>
                                    <p>Bag Total</p>
                                    <p>₹3898.00</p>
                                </div>
                                <div className='space flex'>
                                    <p>Shippin Charge</p>
                                    <p className='green'><b>FREE</b></p>
                                </div>
                                <div className='space flex'>
                                    <p>Bag Subtotal</p>
                                    <p>₹3898.00</p>
                                </div>
                                <div className='space flex'>
                                    <p>Product Discount(s)</p>
                                    <p>-₹1260.00</p>
                                </div>
                                <p className='green'>You will save ₹1260.00 on this order</p>

                            </div>
                            <hr />
                            <div className="check3 flex space">
                                <div>
                                    <p><b>Total</b></p>
                                    <p><b>₹2638</b></p>
                                </div>
                                <button>Checkout</button>
                            </div>
                        </div>

                        <div style={{padding:30}}>
                            <p>Safe and secure payments . Easy returns </p>
                            <p>100% Authentic Products</p>
                        </div>



                    </div>
                </div>
            </div>
        </div>



    )
}

export default Bag