import React from 'react'
import '../../css/CheckoutProduct.css';
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';

function User({key, id, emailAdd, gender, name}) {
    const {currentUser} = useAuth();

    const sendRequest = (event) => {
        event.preventDefault();

        db.collection("users").doc(id).collection("friends").doc(currentUser.uid).set({
            friendName: currentUser.displayName,
            friendEmail: currentUser.email,
            requestAccepted: false
        });

        db.collection("users").doc(currentUser.uid).collection("friends").doc(id).set({
            friendName: name,
            friendEmail: emailAdd,
            requestAccepted: false
        });
    }



    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {name}
                </p>
                <p className="checkoutProduct_price">
                    <strong>{gender}</strong>
                    <strong>{emailAdd}</strong>
                </p>
                <button onClick={sendRequest}>Add Buddy</button>
            </div>
        </div>
    )
}

export default User
