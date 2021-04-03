import React from 'react'
import '../../css/CheckoutProduct.css';

function Friend({key, id, emailAdd, name}) {
    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {name}
                </p>
                <p className="checkoutProduct_price">
                    <strong>Email ID: {emailAdd}</strong>
                </p>
            </div>
        </div>
    )
}

export default Friend
