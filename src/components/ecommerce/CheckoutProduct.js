import React from 'react'
import '../../css/CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, title, price, image, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
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
                        <p className="star">🌟</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from checkout</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
