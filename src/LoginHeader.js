import React from 'react'
import { Link } from 'react-router-dom';
import './RegisterHeader.css';
import logo from './resources/logo.png';
import bg from './resources/RegisterBackground.png';

function LoginHeader() {
    return (
        <div>
            <img src={bg} className="header__bg" alt="background"></img>
            <div className="header">
                <div className="header__left">
                    <Link to="/">
                        <img src={logo} alt="FAMista Logo" className="header__logo"></img>
                    </Link>
                </div>
                <Link className="/register" to="/register">
                    <button className="header__button">Create New Account</button>
                </Link>
            </div>
        </div>
    )
}

export default LoginHeader
