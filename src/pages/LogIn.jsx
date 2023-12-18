import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Styles
import "../styles/auth.css"

//Helpers
import { sendRequest } from '../helpers/apiHelper';
import AnimatedBackDrop from '../components/AnimatedBackDrop';
import ErrorModal from '../components/ErrorModal';


export default function LogIn() {
    const [error, setError] = useState("");
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Assuming the endpoint for user login is 'users/login'
        const path = 'users/login';

        try {
            const result = await sendRequest(path, loginData);
            switch (result) {
                case 400:
                    setError("Invalid Credentials")
                    return;

                case 401:
                    setError(`No user with email: ${loginData.email} has been found in our system`)
                    return;
            
                default:
                    break;
            }

            // TODO: Redirect or handle login success


        } catch (error) {
            setError(`Something went wrong on our end...`)
            console.log(error);
        }
    };

    return (
        <>
            <AnimatedBackDrop />
            <div className="signup-container">
                <form onSubmit={handleSubmit}>
                    <h1 style={{ 'color': "white" }}>Log In</h1>
                    <div className="form-field">
                        <input type="text" name="email" onChange={handleChange} placeholder="Email" required />
                    </div>
                    <div className="form-field">
                        <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
                    </div>
                    <button className="cool-button" type="submit">Log In</button>
                    <p style={{ "color": "white" }}>Don't have an account? <Link to="/signup">Sign Up.</Link></p>
                </form>
            </div>
            {error && ErrorModal(error,setError)}
        </>
    );
}
