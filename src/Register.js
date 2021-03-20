import React, { useState } from 'react'
import './Register.css';
import design from "./resources/images.png";
import { auth } from './firebase.js';
import { useHistory } from 'react-router-dom';

function Register() {
    const history = useHistory('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth.user) {
                auth.user.updateProfile({
                    displayName: firstName + " " + lastName,
                    phoneNumber: phone
                }).then((s) => {
                    history.push("/");
                })
            }
        })
        .catch((e) => {
            alert(e.message);
        })
    }

    return (
        <div className="register">
            <div className="register__left">
                <img src={design} alt="fashion"  className="register__images"></img>
            </div>
            <div className="register__container">
                <h1>Register Today!</h1>
                <h3>It's quick and easy..</h3>
                <form>
                    <center>
                        <input onChange={(e) => setFirstName(e.target.value)} className="register__name" type="name" placeholder="First Name" />
                        <input onChange={(e) => setLastName(e.target.value)} className="register__name" type="name" placeholder="Last Name" />
                    </center>
                    <center>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                    </center>
                    <center>
                        <input onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder="Mobile Number" />
                    </center>
                    <center>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </center>
                    <center>
                        <input type="password" placeholder="Confirm Password" />
                    </center>
                    <h5 className="register__gender">Gender</h5>

                    <div className="register__radiocontainer">
                        <input type="radio" name="gender" value="Male" />
                        <label>Male</label>
                        <input type="radio" name="gender" value="Female" />
                        <label>Female</label>
                        <input type="radio" name="gender" value="Other" />
                        <label>Other</label>
                    </div>

                    <p className="register__policy">
                        By clicking sign up, you agree to our{" "}
                        <span>Terms, Data Policy</span> and <span>Cookie Policy</span>. You 
                        may recieve SMS notifications from us and can opt out at any time.
                    </p>

                    <center>
                        <button onClick={register} type="submit" className="register__register">Sign Up</button>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Register
