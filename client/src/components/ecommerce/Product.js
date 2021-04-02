import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import '../../css/Product.css'
import db from '../../firebase'

function Product({id, title, image, price, rating, userId, setLength}) {
    const {currentUser} = useAuth();
    var [twinCount, setTwinCount]  = useState(0);
    const [twins, setTwins] = useState([]);
    const addToBasket = (event) => {
        event.preventDefault();

        db.collection("users").doc(userId).collection("basketItems").doc(id).set({
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

    const seeTwinCount = (event) => {
        event.preventDefault();
        db.collection("users").doc(currentUser.uid).collection("friends").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.id);
                setTwins(twins => [...twins, doc.id]);
                db.collection("users").doc(doc.id).collection("basketItems").doc(id).get().then((docc) => { 
                    if (docc.exists) { 
                        console.log("Document data:", docc.data()); 
                        twinCount = twinCount + 1;
                        console.log(twinCount);
                        setTwinCount(twinCount);
                    } 
                    else { 
                        // doc.data() will be undefined in this case 
                        console.log("No such document!"); 
                    }
                }).catch((error) => { 
                    console.log("Error getting document:", error); 
                });
                    
            })
        })
    }


    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>    
                </p>
                <p className="product_price">
                    <small>💖</small>
                    <strong>{twinCount}</strong>
                </p> 
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p className="star">🌟</p>
                    ))}
                </div>
                <div>{twins.map( e =>
                    <div>{ e }</div>
                  )}
                  </div>
            </div>
            <img
            alt="Lean Startup"
            src={image}
            />
            <button onClick={seeTwinCount}>Twin Count</button>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
