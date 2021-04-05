import React from 'react'
import '../../css/CheckoutProduct.css';
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';

function SharedBasketProduct({productId, title, price, image, rating, setLength, setTotal, write, friendId}) {
    const {currentUser} = useAuth();

    const removeFromBasket = () => {
        db.collection("users").doc(currentUser.uid).collection("friends").doc(friendId).collection('basketItems').doc(productId).delete().then(() => {
            console.log("Item successfully deleted!");
        }).catch((error) => {
            console.error("Error removing item: ", error);
        });

        db.collection("users").doc(friendId).collection('basketItems').doc(productId).delete().then(() => {
            db.collection("users").doc(friendId).get().then(docc => {
                const data = docc.data()
                db.collection("users").doc(friendId).update({
                    subtotal: data.subtotal - price,
                    noItems: data.noItems - 1
                })
                setLength(data.noItems - 1);
                setTotal(data.subtotal - price);
                if (data.noItems - 1 === 0) {
                    setTotal(0);
                }
            })
        }).catch((error) => {
            console.error("Error removing item: ", error);
        });

    };
    return (
        <div className="checkoutProduct">
            <img alt="" className="checkoutProduct_image" src={image} />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p className="star">⭐</p>
                    ))}
                </div>
                {write? <button onClick={removeFromBasket}>Remove from checkout</button>: <div></div>}
            </div>
        </div>
    )
}

export default SharedBasketProduct