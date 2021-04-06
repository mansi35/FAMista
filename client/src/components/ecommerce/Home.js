import React, { useState, useEffect } from "react";
import "../../css/Home.css";
import Product from "./Product";
import {useAuth} from '../../contexts/AuthContext';
import Header from "../social/Header.js";
import db from '../../firebase';

function Home() {
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
        <Header length={length} />
        <div className="home">
        <div className="home_container">
            <img
            className="home_image"
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/4/7ab2bdef-5673-4cf5-a308-61ca66f4bd871617537128691-AAY_Desk_Banner.jpg"
            alt=""
            />

            <div className="home_row">
            <Product
                id="12321341"
                title="Women Extra Stretch Black Panther Sports Wear, sweat-proof, high durability and low maintanence"
                price={11.96}
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaXnUdilhYcwlS_xbsMktRgMEhJWah0RaPA&usqp=CAU"
                quantity={0}
                userId={currentUser.uid}
                setLength = {setLength}
            />
            <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://allensolly.imgix.net/img/app/product/2/291710-1252219.jpg"
                quantity={0}
                userId={currentUser.uid}
                setLength = {setLength}
            />
            </div>

            <div className="home_row">
            <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/61SFGwq262L._UY550_.jpg"
                quantity={0}
                userId={currentUser.uid}
                setLength = {setLength}
            />
            <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://n3.sdlcdn.com/imgs/j/i/r/CHKOKKO-Women-Active-Wear-Yoga-SDL158692533-1-59f69.jpeg"
                quantity={0}
                userId={currentUser.uid}
                setLength = {setLength}
            />
            <Product
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtgCEq3fC9ikBrxoqE7ynHSbl33GAWUnKkw&usqp=CAU"
                quantity={0}
                userId={currentUser.uid}
                setLength = {setLength}
            />
            </div>

            <div className="home_row">
            <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFGHrlJxvbThcm9ReqK98a3BQ5sOuz89kcw&usqp=CAU  "
                quantity={0}
                userId={currentUser.uid}
                setLength = {setLength}
            />
            </div>
        </div>
        </div>
        </div>
    );
}

export default Home;