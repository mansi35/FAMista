import React from 'react'
import '../../css/CheckoutProduct.css';
import db from '../../firebase';
import firebase from "firebase";
import {useAuth} from "../../contexts/AuthContext";

function Share({key, id, emailAdd, name, itemImage}) {
    const {currentUser} = useAuth();

    const share = () => {
        db.collection('users').doc(currentUser.uid).collection('friends').doc(id).collection('messages').add({
            message: "Please share your review of this product!",
            name: currentUser.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            imageUrl: itemImage
        })

        db.collection('users').doc(id).collection('friends').doc(currentUser.uid).collection('messages').add({
            message: "Please share your review of this product!",
            name: currentUser.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            imageUrl: itemImage
        })
    }

    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {name}
                </p>
                <p className="checkoutProduct_price">
                    <strong>Email ID: {emailAdd}</strong>
                </p>
                <button onClick={share} >Share</button>
            </div>
        </div>
    )
}

export default Share