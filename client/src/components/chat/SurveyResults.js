import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import db from '../../firebase'
import SurveyProduct from './SurveyProduct';
import Header from '../social/Header.js'
import '../../css/Users.css'

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
      <div>
        <Header />
      <h2 className="users-heading">Survey Results <span><img src="https://img.icons8.com/color/64/000000/report-card.png"/></span></h2>
      <div className="user__row">
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
    )
}

export default SurveyResults
