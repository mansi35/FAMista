import React, { useState } from 'react'
import ProductReviewModal from './ProductReviewModal';

function SurveyProduct({key, id, productName, productImage}) {
    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
    };
    
    const hideModal = () => {
        setShow(false);
    };

    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_info">
                <img src={productImage} alt="item" />
                <p className="checkoutProduct_title">
                    {productName}
                </p>
                <ProductReviewModal show={show} productId={id} handleClose={hideModal}>
                    <p>Modal</p>
                </ProductReviewModal>
                <button onClick={showModal}>See Reviews</button>
            </div>
        </div>
    )
}

export default SurveyProduct
