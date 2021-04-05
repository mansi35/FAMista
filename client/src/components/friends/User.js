import React from 'react'
import '../../css/CheckoutProduct.css';
import '../../css/Users.css';
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';
import likeIcon from '../../resources/like-16x16(1).png';
import emailIcon from '../../resources/email.png';
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
            <div style={{display:'none'}}>
            </div>
        )
    }

    return (
        <div class="card">
            <div class="card-header">
                <h1>Image</h1>
                
            </div>
            <div class="card-body">
                <Avatar src={profilePic} />
                <h3>{name}</h3>
                <p><span><img src={likeIcon} alt="like" style={{height:16, width:16, marginRight:10}} /></span>{gender}</p>
                <p><span><img src={emailIcon} alt="like" style={{height:22, width:22, marginRight:5}} /></span>{emailAdd}</p>
                <button onClick={sendRequest}>Add Buddy</button>
            </div>
        </div>
    )
}

export default User
