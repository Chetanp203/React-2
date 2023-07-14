import React from 'react'
import './WomenClothing.css'

const HomeAndKitchen = () => {
  return (
    <div className='w-container'>
         <div className='w-c-1'>
                <p style={{fontSize:30}}><b>Living Room Products</b></p>
                <span>7195 Products</span>
            </div>

            <div className='w-c-2'>
                <input type="text" value={'Sort by: Popularity'} />
            </div>

            <div className="w-inner-con">

                <div className="w-left">
                    <div className="w-l-block">
                        <div className="flex pad">
                            <p><b>Filters</b></p>
                            <p className="pink"><b>Clear All</b></p>
                        </div>
                        <div className='w-pad'>
                            <p><b>Department</b></p>
                            <button className='btn '>Home</button>
                        </div>
                        <div className='w-pad'>
                            <p><b>Category</b></p>
                            <button className='btn '>Furniture</button>
                        </div>
                        <div className="pad">
                            <p><b>Sub Category</b></p>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Benches</p>
                                </div>
                                <p>40942</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Chairs </p>
                                </div>
                                <p>31084</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Tables</p>
                                </div>
                                <p>7435</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Kids Furniture</p>
                                </div>
                                <p>6520</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex'>
                                    <input type="radio" className='w-pr' />
                                    <p>Office Furniture</p>
                                </div>
                                <p>3769</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Ottoman</p>
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
                                    <p>Sofas</p>
                                </div>
                                <p>4377</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Bean Bags</p>
                                </div>
                                <p>328</p>
                            </div>
                            <div className="w-p-type">
                                <div className='flex '>
                                    <input type="radio" className='w-pr' />
                                    <p>Coffee Tables</p>
                                </div>
                                <p>28</p>
                            </div>
                        </div>

                        <div className='w-pad flex'>
                            <p><b>Brand</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <p><b>Size</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <p><b>Type</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <p><b>Colour</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <p><b>Price</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <p><b>Fit</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <p><b>Discount</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <p><b>Fabric Family</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <p><b>Sleeve</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <p><b>Collar</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <p><b>Pattern</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <p><b>Occasion</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <p><b>All Discount</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                        <div className='w-pad flex'>
                            <p><b>Availability</b></p>
                            <i className="fa-solid fa-plus" style={{ color: ' #c2c2c2' }}></i>
                        </div>
                    </div>

                </div>
                {/* left div end */}


                <div className="w-right">

                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016052323_437Wx649H_202301131018421.jpeg" />
                        <p><b>Ed-a-mamma</b></p>
                        <p>Ed-a-mamma kids light</p>
                        <p>Green Floral Print Tp</p>
                        <h3>₹549</h3>
                        <button className='w-rating'>
                            2.8
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000015984892_437Wx649H_202301070649551.jpeg" />
                        <p><b>HOP</b></p>
                        <p>HOP kids by Westside</p>
                        <p>Printed Multi-Coloured T-shirt</p>
                        <h3>₹399</h3>
                        <button className='w-rating'>
                            3
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014432416_437Wx649H_202209122001461.jpeg" />
                        <p><b>HOP</b></p>
                        <p>HOP kids by Westside</p>
                        <p>Printed blue T-shirt</p>
                        <h3>₹764</h3>
                        <button className='w-rating'>
                            4.5
                            <i className="fa-solid fa-star " style={{color: '#0dc92c'}}></i>
                        </button>
                        <h5 className='orange'>Limited stock!</h5>
                    </div>
                    
                    <div className="w-product">
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014432444_437Wx649H_202209122003121.jpeg" />
                        <p><b>Juniper</b></p>
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
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014432415_437Wx649H_202209122001451.jpeg" />
                        <p><b>Red Tape </b></p>
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
                        <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016767131_437Wx649H_202303071223251.jpeg" />
                        <p><b>Red Tape </b></p>
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
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014034070_437Wx649H_202211230127241.jpeg" />
                        <p><b>Jack & Jones</b></p>
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
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017547133_437Wx649H_202305151207291.jpeg" />
                        <p><b>Jack & Jones</b></p>
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
                        <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016696524_437Wx649H_202303011137101.jpeg" />
                        <p><b>U.S. Polo Assn</b></p>
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
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017617669_437Wx649H_202305192048211.jpeg" />
                        <p><b>UCB</b></p>
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
                        <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016870967_437Wx649H_202303160413571.jpeg" />
                        <p><b>Jack & Jones</b></p>
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
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017695208_437Wx649H_202306091530001.jpeg" />
                        <p><b>U.S.Polo Assn.</b></p>
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
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017911945_437Wx649H_202306121127191.jpeg" />
                        <p><b>Red Tape </b></p>
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
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014078060_437Wx649H_202208071941261.jpeg" />
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
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017695209_437Wx649H_202306091529591.jpeg" />
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
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018112269_437Wx649H_202306252123291.jpeg" />
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

export default HomeAndKitchen