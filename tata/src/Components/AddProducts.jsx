import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../Context/Auth.context';

const AddProducts = () => {

  const [prodDetails, setProdDetails] = useState({ title: "", price: "", image: "", category: "Others" });
  const router = useNavigate();
  const { state } = useContext(AuthContext);

  const HandleProdDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProdDetails({ ...prodDetails, [name]: value });
  };
  const HandleCategory = (e) => {
    const value = e.target.value;
    setProdDetails({ ...prodDetails, ["category"]: value });
  };

  const { image, title, price, category } = prodDetails;

  const handleProductSubmit = (e) => {
    e.preventDefault();

    if (image && title && price && category) {
      const getProduct = JSON.parse(localStorage.getItem("Products")) || [];

      const prodObj = {
        ...prodDetails,
        id: uuidv4(),
      };

      getProduct.push(prodObj);
      localStorage.setItem("Products", JSON.stringify(getProduct));
      alert("product added successfully");
      setProdDetails({
        image: "",
        title: "",
        price: "",
        category: "Other",
      });
    } else {
      alert("please fill all the fields");
      setProdDetails({
        image: "",
        title: "",
        price: "",
        category: "Other",
      });
    }
  };

  useEffect(() => {
    // let currentuser = JSON.parse(localStorage.getItem("currentuser"));
    if (state?.user) {
      if (state?.user?.role == "Buyer") {
        alert("sorry You are not a seller");
        router("/");
      }
    } else {
      router("/login");
      alert("Login First as a seller");
    }
  }, []);

  // const handleChange= (event) => {
  //    setProductData({...productData, [event.target.name] : event.target.value})
  // }



  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if(productData.name && productData.price && productData.image && productData.category){
  //         const productArray = JSON.parse(localStorage.getItem("Products")) || [];

  //         const randomId = uuidv4();
  //         productData["id"] = randomId;
  //         productArray.push(productData);
  //         localStorage.setItem("Products", JSON.stringify(productArray));
  //         setProductData({name:"", price:"",image:"",category:"Others"})
  //         alert("Product added successfully")
  //         router('/all-products')
  //     } else {
  //         alert("All fields mandatory")
  //     }
  // }

  // function slelectRole(event){
  //     setProductData({...productData,["category"]: event.target.value})
  // }

  // useEffect(() => {
  //     const user = JSON.parse(localStorage.getItem("Current-user"))
  //     if (user){
  //         if (user && user?.role == "Buyer") {
  //             alert("You are not a seller")
  //             router('/login')
  //         }
  //         } else {
  //             alert("You are not logged in!!")
  //             router('/login')
  //         }
  // }, [])
  return (
    <div style={{paddingBottom:"30px"}}>
      <p style={{fontSize:"25px",fontWeight:"bold",textAlign:"center"}}>Add Product</p>
      <form onSubmit={handleProductSubmit} style={{ border: '2px solid black', fontSize: '18px', padding: '30px', margin: 'auto', border: '2px solid #ccc', width: '20%'}}>
        <label >Product Name:</label><br />
        <input value={prodDetails.title} type="text" name='title' onChange={HandleProdDetails} style={{ width: '200px', height: '40px', border: '1px solid #ccc' }} /><br />
        <label>Product Category:</label><br />
        <select onChange={HandleCategory} style={{ width: '200px', height: '40px', border: '1px solid #ccc' }}>
          <option value="Others">Others</option>
          <option value="Mens">Mens</option>
          <option value="Womens">Womens</option>
          <option value="Kids">Kids</option>
          <option value="Furniture">Furniture</option>
          <option value="Beauty">eauty</option>
          <option value="Electronics">Electronics</option>
        </select>
        <br />

        <label >Product Price:</label><br />
        <input value={prodDetails.price} type="number" name='price' onChange={HandleProdDetails} style={{ width: '200px', height: '40px', border: '1px solid #ccc' }} /><br />
        <label >Product Image: </label><br />
        <input value={prodDetails.image} type="text" name='image' onChange={HandleProdDetails} style={{ width: '200px', height: '40px', border: '1px solid #ccc' }} /><br />
        <input type="submit" value="Add Product" style={{ width: '200px', height: '40px', backgroundColor: 'black',color:"white", border: 'none', borderRadius: '5px', color: 'white', marginTop: '20px', border: '1px solid #ccc' }} /><br />

      </form>
    </div>
  )
}

export default AddProducts;