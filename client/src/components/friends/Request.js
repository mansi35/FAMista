import React from 'react'
import '../../css/CheckoutProduct.css';
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';
import { Avatar } from '@material-ui/core';

function Request({key, id, emailAdd, name, profilePic}) {
    const {currentUser} = useAuth();

    const acceptRequest = (event) => {
        event.preventDefault();

        db.collection("users").doc(id).collection("friends").doc(currentUser.uid).set({
            friendEmail: currentUser.email,
            friendName: currentUser.displayName,
            friendProfilePic: currentUser.photoURL
        });

        db.collection("users").doc(currentUser.uid).collection("friends").doc(id).set({
            friendEmail: emailAdd,
            friendName: name,
            friendProfilePic: profilePic
        }).then(() => {
            db.collection("users").doc(currentUser.uid).collection("friendRequests").doc(id).delete();
        });
    }

    const declineRequest = (event) => {
        event.preventDefault();

        db.collection("users").doc(id).collection("friendRequests").doc(currentUser.uid).delete().then(() => {
            console.log("Item successfully deleted!");
        }).catch((error) => {
            console.error("Error removing item: ", error);
        });
    }

    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                <Avatar src={profilePic} />
                    Hello {name}
                </p>
                <p className="checkoutProduct_price">
                    <strong>Email ID: {emailAdd}</strong>
                </p>
                <button onClick={acceptRequest}>Accept</button>
                <button onClick={declineRequest}>Decline</button>
            </div>
        </div>
    )
}

export default Request
