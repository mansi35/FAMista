import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import db from '../../firebase';
import Friend from '../friends/Friend';

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
        <h2 className="checkout__title">Shared Baskets</h2>
        {friends.map(({id, data}) => {
            return(
                <div>
                {data.read === true? 
                    <div>
                    <Friend key={id} userId={id} name={data.friendName} emailAdd={data.friendEmail} />
                    <Link to={`/basket/${id}`}>
                        <Button>See Shared Basket</Button>
                    </Link>
                    </div>
                    : <div></div>
                }
                </div>
        )})}
        </div>
    )
}

export default SharedBaskets
