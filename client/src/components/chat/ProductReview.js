import React from 'react'

function ProductReview({key, id, feedback, fitting, material, quality, valMoney}) {
    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    Quality: {quality}
                </p>
                <p className="checkoutProduct_title">
                    Fitting: {fitting}
                </p>
                <p className="checkoutProduct_title">
                    Material: {material}
                </p>
                <p className="checkoutProduct_title">
                    Value for Money: {valMoney}
                </p>
                <p className="checkoutProduct_title">
                    Feedback: {feedback}
                </p>
            </div>
        </div>
    )
}

export default ProductReview
