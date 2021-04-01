import React from 'react'
import '../../css/CheckoutProduct.css';
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';

function Request({key, id, emailAdd, name}) {
    const {currentUser} = useAuth();

    const acceptRequest = (event) => {
        event.preventDefault();

        db.collection("users").doc(id).collection("friends").doc(currentUser.uid).update({
            requestAccepted: true
        });

        db.collection("users").doc(currentUser.uid).collection("friends").doc(id).update({
            requestAccepted: true
        });
    }

    const declineRequest = (event) => {
        event.preventDefault();

        db.collection("users").doc(id).collection("friends").doc(currentUser.uid).delete().then(() => {
            console.log("Item successfully deleted!");
        }).catch((error) => {
            console.error("Error removing item: ", error);
        });

        db.collection("users").doc(currentUser.uid).collection("friends").doc(id).delete().then(() => {
            console.log("Item successfully deleted!");
        }).catch((error) => {
            console.error("Error removing item: ", error);
        });
    }

    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {name}
                </p>
                <p className="checkoutProduct_price">
                    <strong>{emailAdd}</strong>
                </p>
                <button onClick={acceptRequest}>Accept</button>
                <button onClick={declineRequest}>Decline</button>
            </div>
        </div>
    )
}

export default Request
