import React, { useState } from 'react'
import ProductReviewModal from './ProductReviewModal';
import '../../css/Users.css';

function SurveyProduct({key, id, productName, productImage}) {
    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
    };
    
    const hideModal = () => {
        setShow(false);
    };

    return (
        // <div className="checkoutProduct">
        //     <div className="product">
        //         <img src={productImage} alt="item" />
        //         <p className="checkoutProduct_title">
        //             {productName}
        //         </p>
                // <ProductReviewModal show={show} productId={id} handleClose={hideModal}>
                //     <p>Modal</p>
                // </ProductReviewModal>
        //         <button onClick={showModal}>See Reviews</button>
        //     </div>
        // </div>

    <div class="card" style={{height:"fit-content", marginTop: -20}}>
    <div class="card-header" style={{background:"white"}}>
        {/* <h1>Image</h1> */}
        <img src={productImage} alt="item" style={{width:300, height:200, padding:0, objectFit:"contain"}}/>
    </div>
    <div class="card-body" style={{background:"#DAB5DA"}}>
        <h5>{productName}</h5>
        <ProductReviewModal show={show} productId={id} handleClose={hideModal}>
                    <p>Modal</p>
        </ProductReviewModal>
        <button onClick={showModal}>View Review</button>
    </div>
    </div>
    )
}

export default SurveyProduct
