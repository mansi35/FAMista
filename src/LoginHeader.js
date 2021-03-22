import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RegisterHeader.css';
import logo from './resources/logo.png';
import bg from './resources/RegisterBackground.png';

function LoginHeader() {
    return (
        <div>
            <img src={bg} className="header__bg" alt="background"></img>
            <div className="header">
            <Container fluid>
                <Row>
                    <Col xs={12} md={6} className="header__left">
                        <center>
                            <Link to="/">
                                <img src={logo} alt="FAMista Logo" className="header__logo"></img>
                            </Link>
                        </center>
                    </Col>
                    <Col xs={12} md={6} className="d-none d-sm-block">
                        <Link className="/register" to="/register">
                            <button className="header__button">Create New Account</button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default LoginHeader
