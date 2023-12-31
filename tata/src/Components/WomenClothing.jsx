import React from 'react'
import './WomenClothing.css'

const WomenClothing = () => {
    return (
        <div className='w-container'>
            <div className='w-c-1'>
                <p style={{fontSize:30}}><b>Women's Clothing</b></p>
                <span>25648 Products</span>
            </div>

            <div className='w-c-2'>
                <input type="text" value={'Sort by: Popularity'} />
            </div>

            <div className="w-inner-con">

                <div className="w-left">
                    <div className="w-l-block">
                        <div className="flex pad">
                            <h3>Filters</h3>
                            <p className="pink"><b>Clear All</b></p>
                        </div>
                        <div className='w-pad'>
                            <h3>Department</h3>
                            <button className='btn '>Womens Clothing</button>
                        </div>
                        <div className='w-pad'>
                            <h3>Category</h3>
                            <button className='btn '>Kurtis</button>
                        </div>
                        <div className="pad">
                            <h3>Product Type</h3>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Fabric Quality</p>
                                </div>
                                <p>40942</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Shirts </p>
                                </div>
                                <p>31084</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Sweatshirts</p>
                                </div>
                                <p>7435</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Jackets</p>
                                </div>
                                <p>6520</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex'>
                                    <input type="radio" className='w-pr' />
                                    <p>Sweaters</p>
                                </div>
                                <p>3769</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Jeans</p>
                                </div>
                                <p>10324</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Trousers & Chinos</p>
                                </div>
                                <p>7291</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Shorts</p>
                                </div>
                                <p>4377</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Blazzers</p>
                                </div>
                                <p>328</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Others</p>
                                </div>
                                <p>28</p>
                            </div>
                        </div>

                        <div className='w-pad flex'>
                            <h3>Brand</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <h3>Size</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <h3>Type</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <h3>Colour</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <h3>Price</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <h3>Fit</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <h3>Discount</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <h3>Fabric Family</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <h3>Sleeve</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <h3>Collar</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <h3>Pattern</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <h3>Occasion</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <h3>All Discount</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <h3>Availability</h3>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                    </div>

                </div>
                {/* left div end */}


                <div className="w-right">

                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000017340053_437Wx649H_202304222223191.jpeg" />
                        <h3>Utsa</h3>
                        <p>Utsa by Westside Yellow</p>
                        <p>Regular Fit Polo T-Shirt</p>
                        <h3>₹1299</h3>
                        <button className='w-rating'>
                            2.8
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017813986_437Wx649H_202306022359551.jpeg" />
                        <h3>UCB</h3>
                        <p>Utsa</p>
                        <p>Utsa by Westside Printed</p>
                        <h3>₹1499</h3>
                        <button className='w-rating'>
                            3
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017764775_437Wx649H_202305311042541.jpeg" />
                        <h3>Rangmanch</h3>
                        <p>Jack & Jones Navy Blue</p>
                        <p>Ranmanch by pantaloons</p>
                        <h3>₹764</h3>
                        <button className='w-rating'>
                            4.5
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014192424_437Wx649H_202208210124011.jpeg" />
                        <h3>Juniper</h3>
                        <p>Juniper Green Printed</p>
                        <p>Straight Kurta</p>
                        <h3>₹799</h3>
                        <button className='w-rating'>
                            3
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017521562_437Wx649H_202305120004041.jpeg" />
                        <h3>Red Tape </h3>
                        <p>Red Tape White Regular Fit</p>
                        <p>Graphic Print Crew Fit</p>
                        <h3>₹417</h3>
                        <button className='w-rating'>
                            4.5
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014724291_437Wx649H_202210010550301.jpeg" />
                        <h3>Red Tape </h3>
                        <p>Red Tape Black Cotton</p>
                        <p>Graphic Print Crew Fit</p>
                        <h3>₹373</h3>
                        <button className='w-rating'>
                            4.1
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <p className='flex'>Price dropped by <p className='pink'><b>Rs.136</b></p></p>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017765298_437Wx649H_202305311103491.jpeg" />
                        <h3>Jack & Jones</h3>
                        <p>Jack & Jones Dark Grey Low</p>
                        <p>Rise Jeans</p>
                        <h3>₹1899</h3>
                        <button className='w-rating'>
                            2.8
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000017136677_437Wx649H_202304080337131.jpeg" />
                        <h3>Jack & Jones</h3>
                        <p>Jack & Jones Dark Grey Low</p>
                        <p>Rise Jeans</p>
                        <h3>₹1899</h3>
                        <button className='w-rating'>
                            2.8
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017912068_437Wx649H_202306121424561.jpeg" />
                        <h3>U.S. Polo Assn</h3>
                        <p>U.S.Polo.Assn. Ivory Cotton</p>
                        <p>Regular Fit Polo T-Shirt</p>
                        <h3>₹1899</h3>
                        <button className='w-rating'>
                            2.8
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i7/437Wx649H/MP000000011534678_437Wx649H_202112212243391.jpeg" />
                        <h3>UCB</h3>
                        <p>United Colours of Benetton</p>
                        <p>Maroon Polo T-Shirt</p>
                        <h3>₹1034</h3>
                        <button className='w-rating'>
                            3
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017746702_437Wx649H_202305301112321.jpeg" />
                        <h3>Jack & Jones</h3>
                        <p>Jack & Jones Navy Blue</p>
                        <p>Cotton Slim Fit Polo T-Shirt</p>
                        <h3>₹764</h3>
                        <button className='w-rating'>
                            4.5
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018002021_437Wx649H_202306180544521.jpeg" />
                        <h3>U.S.Polo Assn.</h3>
                        <p>U.S.Polo.Assn. Dark Green</p>
                        <p>Cotton Regular Fit Printed</p>
                        <h3>₹1599</h3>
                        <button className='w-rating'>
                            3
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000017380756_437Wx649H_202304280126341.jpeg" />
                        <h3>Red Tape </h3>
                        <p>Red Tape White Regular Fit</p>
                        <p>Graphic Print Crew Fit</p>
                        <h3>₹417</h3>
                        <button className='w-rating'>
                            4.5
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017829936_437Wx649H_202306041603061.jpeg" />
                        <h3>Red Tape </h3>
                        <p>Red Tape Black Cotton</p>
                        <p>Graphic Print Crew Fit</p>
                        <h3>₹373</h3>
                        <button className='w-rating'>
                            4.1
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <p className='flex'>Price dropped by <p className='pink'><b>Rs.136</b></p></p>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017856148_437Wx649H_202306072116401.jpeg" />
                        <h3>Jack & Jones</h3>
                        <p>Jack & Jones Dark Grey Low</p>
                        <p>Rise Jeans</p>
                        <h3>₹1899</h3>
                        <button className='w-rating'>
                            2.8
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i12/437Wx649H/MP000000018280332_437Wx649H_202307111712431.jpeg" />
                        <h3>Jack & Jones</h3>
                        <p>Jack & Jones Dark Grey Low</p>
                        <p>Rise Jeans</p>
                        <h3>₹1899</h3>
                        <button className='w-rating'>
                            2.8
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    




                </div>








            </div>

        </div>
    )
}

export default WomenClothing