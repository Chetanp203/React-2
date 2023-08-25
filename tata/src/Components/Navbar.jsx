import React, { useEffect, useState } from 'react'
import './NavbarCss.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/Auth.context';
import { toast } from 'react-hot-toast';
import axios from 'axios';


export const Navbar = () => {
//   const { state, login ,logout} = useContext(AuthContext);
//   console.log(state,"-state")
//   const [userData, setUserData] = useState({name:"", email:"",password:"", role:"Buyer",cart:[]});
//   const router = useNavigate();
//   console.log(userData,"-userdata");
//   const [user, setUser] = useState();

//   useEffect(()=> {
//      if(state?.user){
//       setUser(state?.user)
//      }else{
//       setUser({});
//      }
//   },[state])


  function open() {
    document.getElementById('cat-drop').style.visibility = "visible";
  }
  function leave() {
    document.getElementById('cat-drop').style.visibility = "hidden";
  }


  function mens() {
    router('/menswear')
  }
  function womens() {
    router('/womenclothing')
  }
  function kids() {
    router('/kidswear')
  }
  function homekitchen() {
    router('/homeandkitchen')
  }
  function beauty() {
    router('/beauty')
  }
  function gadgets() {
    router('/gadgets')
  }
  function jewl() {
    router('/jewellery')
  }
  function accs() {
    router('/accessories')
  }


 

//   const handleChange= (event) => {
//      setUserData({...userData, [event.target.name] : event.target.value})
//   }
//   const handleSelectChange= (event) => {
//     const value = event.target.value
//     setUserData({...userData,["role"]:value})
//  }

// //  role: event.target.value

//   const handleSubmit = (event) => {
//       event.preventDefault();
//       if(userData.name && userData.email && userData.password){
//           const array = JSON.parse(localStorage.getItem("Users")) || [];

//           const userDataObj = {
//               name: userData.name,
//               email: userData.email,
//               password: userData.password,
//               cart:[],
//               role: userData.role,
//           };
//           array.push(userDataObj);
//           localStorage.setItem("Users", JSON.stringify(array));
//           alert("Registration Successfull!!!")
//           setUserData({name:"", email:"",password:""})
//           // router('/login')
//       } else {
//           alert("All fields mandatory")
//       }
//   }

//   const handleloginSubmit = (event) => {
//     event.preventDefault();
//     if (userData.email && userData.password) {
//         const users = JSON.parse(localStorage.getItem("Users")); // accessed localstorage
//         console.log(users,"-users")
//         var flag = false;
//         for (var i = 0; i < users.length; i++) {
//             if (users[i].email == userData.email && users[i].password == userData.password) {
//                 flag = true; // re-assign
//                 login(users[i]);

//                 alert("Login successfull.");
//                 setUserData({ email: "", password: "" })
//                 router('/');
//                 break;
//             }
//         }

//         if (flag == false) {
//             return alert("Please check credentails.")
//         }

//     } else {
//         alert("All fields are mandatory")
//     }
// }

const [userData,setUserData]= useState({name:"", email:"", password:"",confirmPassword:"",role:"Buyer"})
    const {state,logout,dispatch} = useContext(AuthContext);
    const router = useNavigate();

    const handleChange = (event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})
    }

    const handleSelectChange =(event)=>{
        setUserData({...userData,"role": event.target.value})
    }

    // console.log(userData,"-userdata")

    const handleRegSubmit =async (event)=>{
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmPassword && userData.role){
           if (userData.password === userData.confirmPassword){
              const response = await axios.post("http://localhost:8003/register",{userData});
              if(response.data.success){
                // router("/login")
                toast.success(response.data.message)
              }else{
                toast.error(response.data.message)
              }
           }else{
            toast.error("Passwords didn't match..")
           }
        }else{
            toast.error("All fields are mandatory")
        }
    }

    
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      const response = await axios.post("http://localhost:8003/login", {
        userData,
      });
      if (response.data.success) {
        dispatch({
          type: "login",
          payload: response.data.user,
        });
        localStorage.setItem("token", JSON.stringify(response.data.token));
        setUserData({ email: "", password: "" });
        router("/");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } else {
      toast.error("All fields are mandatory");
    }
  };

    useEffect(()=>{
      if(state?.user?.name){
        router("/")
      }
      },[state])



  return (
    <div className='nav '>
      <img src="./src/Components/download.png" onClick={()=>router("/")}/>
      <div className='nav-in'>
        <div className='nav-in-1'>
          <h5>Tata CLiQ Luxury</h5>
          
          <ul>
            <li onClick={()=>router('/all-products')}>All Products</li>
            {/* <li onClick={()=>router('/add-products')}>Add Products</li> */}
            {state?.user?.role == "Seller" && <li onClick={()=> router('/add-products')} style={{cursor:'pointer',marginLeft:'30px'}} >Add Product</li>}
            <li>CLiQ Cash</li>
            {/* <li>Gift Card</li> */}
            <li style={{marginLeft:'10px',cursor:'pointer'}} onClick={() => router("/profile")}>Profile-{state?.user?.name}</li>
            {/* <li>Sign in/Sign Up</li> */}
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header" style={{ width: '60%', margin: 'auto', textAlign: 'center' }}>
                    <h1 style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }}>Welcome to Tata CliQ</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{border:'1px solid black',padding:'5px'}}>X</button>
                  </div>

                  {/* form */}

                  <form onSubmit={handleRegSubmit}>
                  <div className='reg' style={{ color: 'black', width: '60%', margin: 'auto', textAlign: "center" }}>
                    <h1 style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>Register</h1><br />
                    <label>Name:</label><br />
                    <input type="text" onChange={handleChange} name="name" value={userData.name}/><br />
                    <label>Email:</label><br />
                    <input type="text" onChange={handleChange} name="email" value={userData.email}/><br />
                    <br />
                    <select onChange={handleSelectChange} style={{ width: '80%', height: '40px',border:'1px solid #ccc' }}>
                      <option value="Buyer">Buyer</option>
                      <option value="Seller">Seller</option>
                    </select>
                    <br />
                    <label>Password:</label><br />
                    <input type="password" onChange={handleChange} name="password" value={userData.password}/><br />
                    <label>Password:</label><br />
                    <input type="password" onChange={handleChange} name="confirmPassword" value={userData.confirmPassword}/><br />

                    <input data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" type="submit" value="Register" style={{ width: '80%', height: '40px', backgroundColor: 'red', border: 'none', borderRadius: '5px', color: 'white', marginTop: '20px' }} /><br />
                  </div>
                  </form>




                  <div style={{color:'black',textAlign:'center'}}>
                    <span>Already have an account?
                       <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" style={{backgroundColor:'white',color:'black',height:'10px',paddingTop:'0px',paddingBottom:'40px',fontSize:'16px',fontWeight:'bolder'}}>Login</button>
                    </span>

                  </div>
                </div>
              </div>
            </div>



            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header" style={{ width: '60%', margin: 'auto', textAlign: 'center' }}>
                    <h1 style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }}>Welcome to Tata CliQ</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{border:'1px solid black',padding:'5px'}}>X</button>
                  </div>

                   <form onSubmit={handleSubmit}>
                  <div className='reg' style={{ color: 'black', width: '60%', margin: 'auto', textAlign: "center" }}>
                    <h1 style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>Login</h1><br />
                    
                    <label>Email:</label><br />
                    <input type="text" name='email' onChange={handleChange} value={userData.email}/><br />
                    <br />
                    <label>Password:</label><br />
                    <input type="text" name='password' onChange={handleChange} value={userData.password}/><br />

                    <input type="submit" value="Login" style={{ width: '80%', height: '40px', backgroundColor: 'red', border: 'none', borderRadius: '5px', color: 'white', marginTop: '20px' }} /><br />
                  </div>
                  </form>


                  <div style={{color:'black',textAlign:'center'}}>
                    <span>Dont have an account?
                       <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" style={{backgroundColor:'white',color:'black',height:'10px',paddingTop:'0px',paddingBottom:'40px',fontSize:'16px',fontWeight:'bolder'}}>Register</button>
                    </span>

                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
              style={{ height: '10px', backgroundColor: 'black', fontSize: '16px', paddingTop: '0px' }}>SignIn/SignUp</button>

              <li onClick={logout} >Logout</li>


          </ul>
        </div>
        <div className='nav-in-2'>
          <h3 onMouseOver={open} >Categories</h3>
          <h3>Brands</h3>
          <div className='input'>
            <i className="fa-solid fa-magnifying-glass search" style={{ color: '#d9d9d9' }}></i>
            <input type="text" className='searchbox' placeholder='Search for products' />
          </div>
          <i className="fa-regular fa-heart fa-xl" style={{ color: '#ffffff' }}></i>
          <i onClick={()=>router('/bag')} className="fa-solid fa-suitcase-rolling bag fa-xl" style={{ color: ' #ffffff' }}></i>
        </div>
        <div id='cat-drop' className="category-drop" onMouseLeave={leave}>
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
                <li onClick={()=> router("/all-products")}><b>All Products</b></li>
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
