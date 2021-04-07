import React, { useState, useEffect } from 'react'
import Header from '../social/Header'
import Checkout from './Checkout.js'
import '../../App.css'
import {useAuth} from '../../contexts/AuthContext';
import db from '../../firebase';

function EmptyCheckout() {
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
                    <Checkout />
                </div>
            </div>
        </div>
    )
}

export default EmptyCheckout
