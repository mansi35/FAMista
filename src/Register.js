import React from 'react'
import './Register.css';
import design from "./resources/images.png";

function Register() {
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
                        <input className="register__name" type="name" placeholder="First Name" />
                        <input className="register__name" type="name" placeholder="Last Name" />
                    </center>
                    <center>
                        <input type="email" placeholder="Email" />
                    </center>
                    <center>
                        <input type="email" placeholder="Mobile Number" />
                    </center>
                    <center>
                        <input type="password" placeholder="Password" />
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
                        <button type="submit" className="register__register">Sign Up</button>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Register
