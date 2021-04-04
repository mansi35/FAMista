import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import db from '../../firebase';
import SharedFriendBasket from './SharedFriendBasket';

function SharedBaskets() {
    const [friends, setFriends] = useState([]);
    const {currentUser} = useAuth();
    useEffect(() => {
        const unsubscribe = db.collection('users').doc(currentUser.uid).collection('friends').onSnapshot(snapshot => (
            setFriends(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )

            ))
        ));

        return () => {
            unsubscribe();
        }
    // eslint-disable-next-line
    },[]);
    return (
        <div>
        {friends.map(({userid, friend}) => (
                <SharedFriendBasket key={userid} userid={userid} />
        ))}
        </div>
    )
}

export default SharedBaskets
