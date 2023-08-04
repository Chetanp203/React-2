import React, { useContext, useEffect, useState } from 'react'
import "./AllProducts.css"
import { AuthContext } from '../Context/Auth.context';
import { useNavigate, useParams } from 'react-router-dom';
const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [isProductsExist, setIsProductsExist] = useState(false);
    const { state } = useContext(AuthContext);

    const route = useNavigate();

    useEffect(() => {
        const getProducts = JSON.parse(localStorage.getItem("Products"));

        if (getProducts) {
            setIsProductsExist(true);
            setProducts(getProducts);
        } else {
            setIsProductsExist(false);
        }
    }, []);


    // function addCart() {
    //     if (isUserLoggedIn) {
    //         const users = JSON.parse(localStorage.getItem("Users"));

    //         for (var i = 0; i < users.length; i++) {
    //             if (users[i].email == currentUserEmail) {
    //                 users[i].cart?.push(products);
    //                 localStorage.setItem("Users", JSON.stringify(users));
    //                 break;
    //             }
    //         }
    //         alert("Added to cart")
    //         route("/product-from-backend")
    //     } else {
    //         alert("Login to add items to cart..")
    //     }

    // }

    const addCart = (id) => {
        const regUser = JSON.parse(localStorage.getItem("Users"));

        if (state?.user) {
            for (let i = 0; i < regUser.length; i++) {
                if (regUser[i].email === state.user.email) {
                    const duplicate = regUser[i].cart.find((e) => e.id === id);

                    // console.log(duplicate);
                    // Do not add Duplicate items
                    if (regUser[i].cart.length && duplicate) {
                        toast("product already added");
                        route("/cart");
                    } else {
                        regUser[i].cart.push(singleProduct);
                        localStorage.setItem("Users", JSON.stringify(regUser));
                        alert("product added");
                        route("/all-products");
                    }
                }
            }
        }
    };


    return (
        <div className='prod-page'>

            {isProductsExist ? (
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "45px 0",
                        marginTop: "2%",
                    }}
                >
                    {products.length ? (
                        products.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    width: "20%",
                                    // height: "350px",
                                    border: "2px solid grey",
                                    boxShadow: "2px 2px 15px grey",
                                    textAlign: "center",
                                    marginLeft: "3%",
                                    padding: '5px',
                                    borderRadius:'10px'
                                }}
                                onClick={() => route(`/singleproduct/${item.id}`)}
                            >
                                
                                <img
                                    width="100%"
                                    height="100px"
                                    src={item.image}
                                    alt="broken image"
                                />
                                
                                <p style={{ fontSize: '25px' }}><b>{item.title}</b></p>
                                <h3>Category :{item.category}</h3>
                                <p style={{ fontSize: '25px' }}>Rs.{item.price}</p>

                                {state?.user?.role == "Seller" ? <button className='addtobag' style={{width:'90%',height:'30px',backgroundColor:'black',color:'white',borderRadius:'5px'}}>Update Product</button>
                                    :
                                    <button className='addtobag' onClick={addCart} style={{width:'90%',height:'30px',backgroundColor:'black',color:'white',borderRadius:'5px'}}>Add to cart</button>}
                            </div>
                        ))
                    ) : (
                        <div>
                            <h1>Loading...</h1>
                        </div>
                    )}
                </div>
            ) : (
                <div style={{ textAlign: "center" }}>
                    <h1>No Products</h1>
                </div>
            )}


            {/* {!isProductsExist ?(
                <div>No Products</div>
                :
                <div className='pro-container'>
                    {products.length ? products.map((pro) => (
                        <div key={pro.id} className='pro-card' onClick={() => route(`/singleproduct/${pro.id}`)}>
                            <img src={pro.image} />
                            <p style={{ fontSize: '20px' }}><b>{pro.title}</b></p>
                            <p>{pro.category}</p>
                            <h3>$.{pro.price}</h3>
                            {state?.user?.role == "Seller" ? <button className='addtobag'>Update Product</button>
                                :
                                <button className='addtobag' onClick={addCart}>Add to cart</button>}



                        </div>
                    ))}

                </div>
            )} */}


        </div>
    );
};

export default AllProducts;