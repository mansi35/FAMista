import React, { useEffect, useState } from "react";
import "../../css/Checkout.css";
import Share from './Share';
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';


function ShareWithFriends({itemImage}) {
    const [friends, setFriends] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        db.collection("users").doc(currentUser.uid).collection("friends")
        .onSnapshot((snapshot) => 
            setFriends(snapshot.docs.map((doc) => ({
                friendId: doc.id,
                friend: doc.data()
            })))
        );
    // eslint-disable-next-line
    }, [])

    return (
      <div className="checkout">
      <div className="checkout__left">

        <div>
          <h2 className="checkout__title">Share with...</h2>
          {friends.map(({ friendId, friend }) => (
              <Share 
                key = {friendId}
                id = {friendId}
                emailAdd = {friend.friendEmail}
                name = {friend.friendName}
                itemImage = {itemImage}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShareWithFriends;
