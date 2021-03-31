import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function logOut() {
        setError("");

        try {
            await logout();
            history.push("/login");
        } catch {
            setError("Failed to log out");
        }
    }

    return (
        <div>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email:</strong> {currentUser.email} <br />
                <strong>Name:</strong> {currentUser.displayName} <br />
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                    Update Profile
                </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={logOut}>
                Log Out
                </Button>
            </div>
        </div>
    )
}

export default Dashboard
