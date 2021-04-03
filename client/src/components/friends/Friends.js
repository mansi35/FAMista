import React, { useEffect, useState } from "react";
import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import "../../css/Checkout.css";
import Friend from './Friend';
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';


function Friends() {
    const [friends, setFriends] = useState([]);
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function logOut() {
        setError("");

        try {
            await logout();
            history.push("/login");
        } catch {
            setError("Failed to log out");
        }
    }

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
      <div>
      <Card>
        <Card.Body>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email:</strong> {currentUser.email} <br />
        <strong>Name:</strong> {currentUser.displayName} <br />
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
        </Link>
        </Card.Body>
      </Card>
      <div className="checkout">
      <div className="checkout__left">

        <div>
          <h2 className="checkout__title">My Shopping Buddies</h2>
          {friends.map(({ friendId, friend }) => (
              <Friend 
                key = {friendId}
                id = {friendId}
                emailAdd = {friend.friendEmail}
                name = {friend.friendName}
              />
          ))}
        </div>
      </div>
    </div>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={logOut}>
        Log Out
        </Button>
      </div>
    </div>
  );
}

export default Friends;
