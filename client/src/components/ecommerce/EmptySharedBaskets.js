import React, { useState, useEffect } from 'react';
import Header from '../social/Header';
import SharedBaskets from './SharedBaskets';
import '../../App.css';
import {useAuth} from '../../contexts/AuthContext';
import db from '../../firebase';

function EmptySharedBasket() {
    const {currentUser} = useAuth();
    const [length, setLength] = useState(0);

    useEffect(() => {
        if (currentUser) {
            db.collection("users").doc(currentUser.uid).get().then(docc => {
                const data = docc.data();
                setLength(data.noItems);
            })
        }
    })
    return (
        <div>
            <Header length = {length}/> 
            <div className="app">
                <div className="app__body">
                    <SharedBaskets />
                </div>
            </div>
        </div>
    )
}

export default EmptySharedBasket;