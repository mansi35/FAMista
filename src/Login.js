import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import design from "./resources/fashion.png";

function Login() {
    return (
        <div className="login">
            <div className="login__left">
                <img src={design} alt="fashion"  className="login__images"></img>
            </div>
            <div className="login__container">
                <h3>Log In To FAMista!</h3>
                <form>
                    <center>
                        <input type="email" placeholder="Email" />
                    </center>
                    <center>
                        <input type="password" placeholder="Password" />
                    </center>
                    <center>
                        <button type="submit" className="login__login">Log In</button>
                    </center>
                    <center>
                        <h6>Forgotten Password</h6>
                    </center>
                    <center>
                        <hr />
                    </center>
                    <center>
                        <Link to="/register">
                            <button className="login__createNewAccount">Create New Account</button>
                        </Link>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Login
