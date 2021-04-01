import React, { useEffect, useState } from "react";
import "../../css/Checkout.css";
import Request from './Request';
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';


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
    <div className="checkout">
      <div className="checkout__left">

        <div>
          <h2 className="checkout__title">Friend Requests</h2>
          {friends.map(({ requestId, request }) => (
              <Request 
                key = {requestId}
                id = {requestId}
                emailAdd = {request.requestEmail}
                name = {request.requestName}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Requests;