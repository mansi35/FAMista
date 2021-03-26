import React, { useState }from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom";
import { auth } from "./firebase";
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                alt="Amazon logo"
                className="login_logo"
                src="https://assets1.csnews.com/files/styles/content_sm/s3/2017-12/amazon%20logo-TEASER_0.jpg?itok=XZfXEEbA"
                />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button 
                        type="submit" 
                        onClick={signIn}
                        className="login_signInButton">
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to the Famista Conditions
                    of Use & Sale, Please see our Privacy Notice, our Cookies
                    and out Interest-Based Ads Notice.
                </p>
                <button 
                    onClick={register}
                    className="login_registerButton">
                    Create your Amazon account
                </button>
            </div>
            
        </div>
    )
}

export default Login
