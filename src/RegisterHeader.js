import React from 'react'
import { Link } from 'react-router-dom';
import './RegisterHeader.css';
import logo from './resources/logo.png';
import bg from './resources/RegisterBackground.png';

function RegisterHeader() {
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
                        <input className="header__input1" type="email" placeholder="Email Address" />
                        <input className="header__input2" type="password" placeholder="Password" />
                        <button type="submit" className="header__submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterHeader
