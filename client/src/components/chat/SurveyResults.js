import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import db from '../../firebase'
import SurveyProduct from './SurveyProduct';

function SurveyResults() {
    const {currentUser} = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        db.collection('users').doc(currentUser.uid).collection('surveyResults')
        .onSnapshot((snapshot) => 
        setProducts(snapshot.docs.map((doc) => ({
            productId: doc.id,
            product: doc.data()
        })))
    );
    }, [])

    return (
        <div className="checkout">
        <div className="checkout__left">
  
          <div>
            <h2 className="checkout__title">Friend Requests</h2>
            {products.map(({ productId, product }) => (
                <SurveyProduct 
                  key = {productId}
                  id = {productId}
                  productName = {product.itemName}
                  productImage = {product.itemImage}
                />
            ))}
          </div>
        </div>
      </div>
    )
}

export default SurveyResults
