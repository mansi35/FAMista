import React, { useEffect, useState } from "react";
import "../../css/Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';
import Subtotal from "./Subtotal";
import { Button } from 'react-bootstrap'
import ShareBasketModal from './ShareBasketModal'

function Checkout() {
    const {currentUser} = useAuth();
    const [items, setItems] = useState([]);
    const [length, setLength] = useState(0);
    const [total, setTotal] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (currentUser) {
            db.collection("users").doc(currentUser.uid).get().then(docc => {
                const data = docc.data();
                setTotal(data.subtotal);
                setLength(data.noItems);
            })
        }
    })
    

    useEffect(() => {
        db.collection("users").doc(currentUser.uid).collection("basketItems")
            .onSnapshot((snapshot) => 
            setItems(snapshot.docs.map((doc) => ({
                id: doc.id,
                item: doc.data()
            })))
        );
    // eslint-disable-next-line
    }, [])

    const showModal = () => {
        setShow(true);
    };
  
  	const hideModal = () => {
      	setShow(false);
  	};

    return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {items.map(({ id, item }) => (
              <CheckoutProduct 
                key = {id}
                productId = {id}
                title = {item.itemName}
                price = {item.itemPrice}
                image = {item.itemImage}
                rating = {item.itemRating} 
                quantity = {item.itemQuantity}
                setLength = {setLength}
                setTotal = {setTotal}
              />
          ))}
        </div>
      </div>
      <div className="checkout__right">
			<Subtotal 
				checkout
				length = {length}
				total = {total}
			/>
		  	<ShareBasketModal show={show} handleClose={hideModal}>
                <p>Modal</p>
            </ShareBasketModal>
          <Button onClick={showModal}>Share Basket</Button>
      </div>
    </div>
  );
}

export default Checkout;