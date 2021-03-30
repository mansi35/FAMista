import React from 'react'
import '../../css/Product.css'
import db from '../../firebase'

function Product({id, title, image, price, rating, userId, setLength}) {
    const addToBasket = (event) => {
        event.preventDefault();

        db.collection("users").doc(userId).collection("basketItems").doc(id).set({
            itemId: id,
            itemName: title,
            itemImage: image,
            itemPrice: price,
            itemRating: rating,
        });

        db.collection("users").doc(userId).get().then(docc => {
            const data = docc.data()
            db.collection("users").doc(userId).update({
                subtotal: data.subtotal + price,
                noItems: data.noItems + 1
            })
            setLength(data.noItems + 1);
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>    
                </p> 
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p className="star">🌟</p>
                    ))}
                </div>
            </div>
            <img
            alt="Lean Startup"
            src={image}
            />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
