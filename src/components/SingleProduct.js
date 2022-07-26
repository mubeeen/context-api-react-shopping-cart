import React, { useEffect, useState, useContext } from "react"
import { MyCart } from "../contexts/CartContext";

export const SingleProduct = ({ prod }) => {
    const { cart, setCart } = useContext(MyCart);
    const { id, name, price, image } = prod;
    
    return (
        <div className="products" id={id}>
            <img src={image} alt={name} />
            <div className="productDesc">
                <span style={{fontWeight: 700}}>{name}</span>
                <span>rs: {price.substring(0,3)}</span>
            </div>
            
            { cart.includes(prod) ? (
                <button className="remove" onClick={()=>{
                    setCart(cart.filter((c)=> c.id !== prod.id));
                }}>Remove from Cart</button>
            ):(
                <button className="add" onClick={()=>{
                    setCart([...cart, prod]);
                }}>Add to Cart</button>
            )}

        </div>  
    );

}