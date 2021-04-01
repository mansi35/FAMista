import React from 'react'
import '../../css/CheckoutProduct.css';
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';

function User({key, emailAdd, gender, name}) {
    const {currentUser} = useAuth();

    // const removeFromBasket = () => {
    //     db.collection("users").doc(key).collection("friends").doc(productId).delete().then(() => {
    //         console.log("Item successfully deleted!");
    //         db.collection("users").doc(currentUser.uid).get().then(docc => {
    //             const data = docc.data()
    //             db.collection("users").doc(currentUser.uid).update({
    //                 subtotal: data.subtotal - price,
    //                 noItems: data.noItems - 1
    //             })
    //             setLength(data.noItems - 1);
    //             setTotal(data.subtotal - price);
    //             if (data.noItems - 1 === 0) {
    //                 setTotal(0);
    //             }
    //         })
    //     }).catch((error) => {
    //         console.error("Error removing item: ", error);
    //     });
    // };

    const addToBasket = (event) => {
        event.preventDefault();

        db.collection("users").doc(key).collection("friends").doc(currentUser.uid).set({
            itemId: id,
            itemName: title,
            itemImage: image,
            itemPrice: price,
            itemRating: rating,
        });

        db.collection("users").doc(userId).get().then(docc => {
            const data = docc.data()
            db.collection("users").doc(userId).update({
                subtotal: data.subtotal + price,
                noItems: data.noItems + 1
            })
            setLength(data.noItems + 1);
        })
    }



    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {name}
                </p>
                <p className="checkoutProduct_price">
                    <strong>{gender}</strong>
                    <strong>{emailAdd}</strong>
                </p>
                <button>Add Buddy</button>
            </div>
        </div>
    )
}

export default User
