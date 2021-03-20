import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './RegisterHeader.css';
import logo from './resources/logo.png';
import bg from './resources/RegisterBackground.png';
import { auth } from './firebase.js';
import { useHistory } from 'react-router-dom';

function RegisterHeader() {
    const [email, setEmail] = useState('');
    const history = useHistory('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            history.push("/");
        })
        .catch((e) => {
            if (
                e.message ===
                "The password is invalid or the user does not have a password."
            ) {
                alert("Please check your credentials again");
            } else if (
                e.message ===
                "There is no user record corresponding to this identifier. The user may have been deleted."
            ) {
                history.push("/register");
                window.scrollTo({
                    top: document.body.scrollHeight,
                    left: 0,
                    behavior: "smooth",
                });
            } else {
                alert(e.message);
            }
        });
    }

    return (
        <div>
            <img src={bg} className="header__bg" alt="background"></img>
            <div className="header">
                <div className="header__left">
                    <Link to="/">
                        <img src={logo} alt="FAMista Logo" className="header__logo"></img>
                    </Link>
                </div>
                <div className="header__right">
                    <p className="header__text">Already signed up? Log in</p>
                    <form>
                        <input onChange={(e) => setEmail(e.target.value)} className="header__input1" type="email" placeholder="Email Address" />
                        <input onChange={(e) => setPassword(e.target.value)} className="header__input2" type="password" placeholder="Password" />
                        <button type="submit" onClick={login} className="header__submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterHeader
