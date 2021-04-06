import React, { useEffect, useState } from "react";
import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import "../../css/Checkout.css";
import Friend from './Friend';
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';
import { Avatar } from "@material-ui/core";
import Header from "../social/Header";
import '../../css/Users.css';
// import likeIcon from '../../resources/like-16x16(1).png';
import emailIcon from '../../resources/email.png';


function Friends() {
    const [friends, setFriends] = useState([]);
    // const [error, setError] = useState("")
    const { currentUser} = useAuth();
    // const history = useHistory();

    // async function logOut() {
    //     setError("");

    //     try {
    //         await logout();
    //         history.push("/login");
    //     } catch {
    //         setError("Failed to log out");
    //     }
    // }

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
    // <div>
    //   <Header />
    //   <h2 className="text-center mb-4" style={{color:"white", marginTop:20}}>My Profile</h2>
    //   <div className="main-card" style={{maxWidth:"50%"}}>
    //     {friends.map(({ friendId, friend }) => (
    //         <Friend 
    //           key = {friendId}
    //           id = {friendId}
    //           emailAdd = {friend.friendEmail}
    //           name = {friend.friendName}
    //           profilePic = {friend.friendProfilePic}
    //         />
    //     ))}
    //   </div>
    // </div> 

    <div>
      <Header />
      <h2 className="users-heading">Your Shopping Buddies <span><img src="https://img.icons8.com/emoji/48/000000/purple-heart.png" alt="emoji" />
        <img src="https://img.icons8.com/color/48/000000/friends-hanging-out.png" alt="emoji" /></span></h2>
      <div className="user__row">
      {friends.map(({ friendId, friend }) => (
             <Friend 
              key = {friendId}
              id = {friendId}
              emailAdd = {friend.friendEmail}
              name = {friend.friendName}
              profilePic = {friend.friendProfilePic}
            />
         ))}
      </div>
    </div>
  );
}

export default Friends;
