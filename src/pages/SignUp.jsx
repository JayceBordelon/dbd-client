import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Styles
import "../styles/auth.css"

//Helpers
import { sendRequest } from '../helpers/apiHelper';
import AnimatedBackDrop from '../components/AnimatedBackDrop';
import ErrorModal from '../components/ErrorModal';
import { instantiateClientSession, getCurrentUser, currentUserIsPresent } from '../helpers/clientSessionHelper';

export default function SignUp() {
    const currentUser = getCurrentUser();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
        email: '',
        firstName: '',
        lastName: '',
        role: '',
        organization: ''
    });

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        //check that passwords match
        if (userData.password !== userData.passwordConfirm){
            console.error("passwords dont match")
            return;
        }
        // Assuming the endpoint for user registration is 'users/register'
        const path = 'users/register';

        try {
            const result = await sendRequest(path, userData);
            switch (result) {
                case 401:
                    setError("A user already exists under that email or username... Try again with diferent credentials.")
                    return;
                case 400:
                    setError("Something went wrong when creating your account. Try again with diferent credentials.")
                    return;
                default:
                    break;
            }
            //TODO: Redirect or handle success
            const { user } = result.payload;
            instantiateClientSession(user);
            
            // REDIRECT TO MONGO BY DEFAULT
            navigate('/dbpage/mongodb'); // Redirect to DbPage with 'mongodb' as parameter
        } catch (error) {
            setError(`Something went wrong on our end...`)
        }
    };


    // Assert user presence
    useEffect(()=>{
        const assertUserPresence = async() => {
            const present = await currentUserIsPresent();
            if (present){
                //bypass the sign up
                navigate('/dbpage/mongodb'); // Redirect to DbPage with 'mongodb' as parameter
            }
        }
        assertUserPresence();
    }, []);
    

    return (
        <>
        <AnimatedBackDrop />
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
            <h1 style={{'color': "white"}}>Sign Up</h1>
                <div className="form-field">
                    <input type="text" name="username" onChange={handleChange} placeholder="Username" required />
                </div>
                <div className="form-field">
                    <input type="text" name="email" onChange={handleChange} placeholder="Email" required />
                </div>
                <div className="form-field">
                    <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
                    <input type="password" name="passwordConfirm" onChange={handleChange} placeholder="Confirm Your Password" required />
                </div>
                <div className="form-field">
                    <input type="text" name="firstName" onChange={handleChange} placeholder="First Name" required />
                    <input type="text" name="lastName" onChange={handleChange} placeholder="Last Name" required />
                </div>
                <div className="form-field">
                    <input type="text" name="organization" onChange={handleChange} placeholder="Organization" required />
                    <select name="role" onChange={handleChange} required>
                        <option value="">Select Role</option>
                        <option value="developer">Developer</option>
                        <option value="manager">Manager</option>
                        <option value="dbdesigner">DB Designer</option>
                    </select>
                </div>
                <button className="cool-button" type="submit">Sign Up</button>
                <p style={{"color": "white"}}>Already have an account? <Link to="/login">Login.</Link></p>
            </form>
        </div>
        {error && ErrorModal(error, setError)}
        </>
    );
}
