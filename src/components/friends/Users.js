import React, { useEffect, useState } from "react";
import "../../css/Checkout.css";
import User from './User';
import db from '../../firebase';
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
    <div className="checkout">
      <div className="checkout__left">

        <div>
          <h2 className="checkout__title">Find your shopping buddy!</h2>
          {users.map(({ userId, user }) => (
              <User 
                key = {userId}
                id = {userId}
                emailAdd = {user.emailAdd}
                gender = {user.gender}
                name = {user.name}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;