import React, { useEffect, useState } from "react";
import "../../css/Checkout.css";
import User from './User';
import db from '../../firebase';
import Header from '../social/Header.js';
import "../../css/Users.css";
// import {useAuth} from '../../contexts/AuthContext';


function Users() {
  // const {currentUser} = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
      db.collection("users")
      .onSnapshot((snapshot) => 
          setUsers(snapshot.docs.map((doc) => ({
              userId: doc.id,
              user: doc.data()
          })))
      );
  // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Header />
      <h2 className="users-heading">Find your shopping buddy! <span><img src="https://img.icons8.com/emoji/48/000000/purple-heart.png"/>
        <img src="https://img.icons8.com/color/48/000000/friends-hanging-out.png"/></span></h2>
      <div className="user__row">
        {users.map(({ userId, user }) => (
            <User 
              key = {userId}
              id = {userId}
              emailAdd = {user.emailAdd}
              gender = {user.gender}
              name = {user.name}
              profilePic = {user.profilePic}
            />
        ))}
      </div>
    </div>
  );
}

export default Users;