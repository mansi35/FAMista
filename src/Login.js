import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Login.css';
import design from "./resources/fashion.png";
import { Link } from 'react-router-dom';
import { auth } from './firebase.js';
import { useHistory } from 'react-router-dom';

function Login() {
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
        <div className="login">
            <Container fluid> 
                <Row>
                    <Col xs={12} md={6} className="login__left">
                    <center>
                        <img src={design} alt="fashion"  className="login__images"></img>
                    </center>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="login__container">
                            <h3>Log In To FAMista!</h3>
                            <form>
                                <center>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                                </center>
                                <center>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                                </center>
                                <center>
                                    <button type="submit" onClick={login} className="login__login">Log In</button>
                                </center>
                                <center>
                                    <h6>Forgot Password</h6>
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
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
