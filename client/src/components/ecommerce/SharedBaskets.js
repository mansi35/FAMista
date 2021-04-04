import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import db from '../../firebase';
import SharedFriendBasket from './SharedFriendBasket';

function SharedBaskets() {
    const [friends, setFriends] = useState([]);
    const {currentUser} = useAuth();

    useEffect(() => {
        db.collection("users").doc(currentUser.uid).collection("friends").get().then(querySnapshot => {
            setFriends(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        });
    // eslint-disable-next-line
    }, [])

    return (
        <div>
        {friends.map(({id, data}) => {
            console.log(id);
            return(
                <SharedFriendBasket key={id} userId={id} name={data.friendName} />
        )})}
        </div>
    )
}

export default SharedBaskets
