import React, { useState } from 'react'
import '../../css/CheckoutProduct.css';
import db from '../../firebase';
import {useAuth} from "../../contexts/AuthContext";
import {Button} from 'react-bootstrap';

function ShareProduct({key, id, emailAdd, name, handleClose}) {
    const {currentUser} = useAuth();
    const [checked, setChecked] = useState(false);

    const share = () => {
        db.collection('users').doc(currentUser.uid).collection('basketItems').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                db.collection('users').doc(id).collection('friends').doc(currentUser.uid).collection('basketItems').doc(doc.id).set({
                    itemId: doc.data().itemId,
                    itemImage: doc.data().itemImage,
                    itemName: doc.data().itemName,
                    itemPrice: doc.data().itemPrice,
                    itemRating: doc.data().itemRating,
                })
            })
        })

        db.collection('users').doc(id).collection('friends').doc(currentUser.uid).update({
            read: true,
            write: false
        })

        if (checked) {
            db.collection('users').doc(id).collection('friends').doc(currentUser.uid).update({
                write: true
            })
        }
        handleClose();
    }

    const handleCheck = () => {
        setChecked(!checked);
    }

    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {name}
                </p>
                <p className="checkoutProduct_price">
                    <strong>Email ID: {emailAdd}</strong>
                </p>
                <input type="checkbox" onChange={handleCheck} defaultChecked={checked}/>&nbsp; Give edit access? <br />
                <Button onClick={share} >Share Your Basket</Button>
            </div>
        </div>
    )
}

export default ShareProduct