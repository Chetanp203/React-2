import React from 'react'
import './NavbarCss.css'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const router = useNavigate();
    function open()
{
document.getElementById('cat-drop').style.visibility="visible";
}
function leave()
{
    document.getElementById('cat-drop').style.visibility="hidden";
}


  function mens(){
    router('/menswear')
  }
  function womens(){
    router('/womenclothing')
  }
  function kids(){
    router('/kidswear')
  }
  function homekitchen(){
    router('/homeandkitchen')
  }
  function beauty(){
    router('/beauty')
  }
  function gadgets(){
    router('/gadgets')
  }
  function jewl(){
    router('/jewellery')
  }
  function accs(){
    router('/accessories')
  }
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
                <h3 onClick={leave} onMouseOver={open} >Catergories</h3>
                <h3>Brands</h3>
                <div className='input'>
                <i className="fa-solid fa-magnifying-glass search" style={{color: '#d9d9d9'}}></i>
                <input type="text" className='searchbox' placeholder='Search for products' />
                </div>
                <i className="fa-regular fa-heart fa-xl" style={{color: '#ffffff'}}></i>
                <i className="fa-solid fa-suitcase-rolling bag fa-xl" style={{color:' #ffffff'}}></i>
            </div>
            <div id='cat-drop' className="category-drop">
                <div className="cat-left">
                    <ul>
                        <li onClick={womens}>Womens Fashion</li>
                        <hr />
                        <li onClick={mens}>Mens Fashion</li>
                        <hr />
                        <li onClick={kids}>Kids Fashion</li>
                        <hr />
                        <li onClick={homekitchen}>Home & Kitchen</li>
                        <hr />
                        <li onClick={beauty}>Beauty</li>
                        <hr />
                        <li onClick={gadgets}>Gadgets</li>
                        <hr />
                        <li onClick={jewl}>Jewellery</li>
                        <hr />
                        <li onClick={accs}>Accessories</li>
                        <hr />
                    </ul>
                </div>

                <div className="cat-right">
                    <div>
                        <ul>
                            <li><b>Shop All Ethnic Wear</b></li>
                            <li>Kurits & Kurtas</li>
                            <li>Suits</li>
                            <li>Sarees</li>
                            <li>Lehengas</li>
                            <li>Bottoms</li>
                            <li>Blouses & Fabrics</li>
                            <li>Dupattas</li>
                            <li><b>Shop All Western Wear</b></li>
                            <li>Tops & Tunics</li>
                            <li>Dresses</li>
                            <li>Jeans</li>
                            <li>Shirts</li>
                            <li>Trousers</li>
                            <li>Skirts</li>

                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Shorts</li>
                            <li>Jackets & Blazers</li>
                            <li>Leggings</li>
                            <li>Capris</li>
                            <li>Jumpsuits</li>
                            <li>Shrugs</li>
                            <li>Sweaters</li>
                            <li>Sweatshirts</li>
                            <li><b>Activewear & Sportswear</b></li>
                            <li>T-shirts</li>
                            <li>Shorts</li>
                            <li>Sets</li>
                            <li>Jackets</li>
                            <li>Track Pants</li>
                            <li>Innerwear</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><b>Lingerie & Lounge Sets</b></li>
                            <li>Bras</li>
                            <li>Panties</li>
                            <li>Lingerie Sets</li>
                            <li>Camisoles</li>
                            <li>Sleepwear & Robes</li>
                            <li>Shapewear</li>
                            <li>Swimwear</li>
                            <li><b>Shop All Footwear</b></li>
                            <li>Casual Footwear</li>
                            <li>Boots</li>
                            <li>Sneakers</li>
                            <li>Flip Flops</li>
                            <li>Sports Shoes</li>
                            <li>Ethnic Footwear</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><b>Bags, Wallets & Clutchs</b></li>
                            <li>Handbags</li>
                            <li>Tote Bags</li>
                            <li>Sling Bags</li>
                            <li>Backpacks</li>
                            <li>Wallets</li>
                            <li>Cltches</li>
                            <li>Premium Handbags</li>
                            <li><b>Jewellery</b></li>
                            <li>Gold</li>
                            <li>Diamond</li>
                            <li>Silver</li>
                            <li>Fashion Jewellery</li>
                            <li><b>Watches</b></li>
                            <li>Smart</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}
export default Navbar;
