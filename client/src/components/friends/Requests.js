import React, { useEffect, useState } from "react";
import "../../css/Checkout.css";
import Request from './Request';
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';
import Header from '../social/Header';


function Requests() {
    const {currentUser} = useAuth();
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        db.collection("users").doc(currentUser.uid).collection("friendRequests")
        .onSnapshot((snapshot) => 
            setFriends(snapshot.docs.map((doc) => ({
                requestId: doc.id,
                request: doc.data()
            })))
        );
    // eslint-disable-next-line
    }, [])

    return (
    <div>
    <Header />
    <h2 className="users-heading">Friend Requests</h2>
    <div className="user__row">
    {friends.map(({ requestId, request }) => (
               <Request 
                 key = {requestId}
                 id = {requestId}
                 emailAdd = {request.requestEmail}
                 name = {request.requestName}
                 profilePic = {request.requestPic}
               />
           ))}
    </div>
    </div>
  );
}

export default Requests;