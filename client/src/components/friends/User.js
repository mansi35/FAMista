import React from 'react'
import '../../css/CheckoutProduct.css';
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';
import  { Avatar } from '@material-ui/core';

function User({key, id, emailAdd, gender, name, profilePic}) {
    const {currentUser} = useAuth();

    const sendRequest = (event) => {
        event.preventDefault();

        db.collection("users").doc(id).collection("friendRequests").doc(currentUser.uid).set({
            requestName: currentUser.displayName,
            requestEmail: currentUser.email,
            requestPic: currentUser.photoURL,
            requestAccepted: false
        });
    }

    if (currentUser.email === emailAdd) {
        return (
            <div>
            </div>
        )
    }

    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                <Avatar src={profilePic} />
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
