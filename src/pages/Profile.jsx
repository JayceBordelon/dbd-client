import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'

import "../styles/profile.css"
import { logOut } from '../helpers/clientSessionHelper';

export default function Profile() {
    useEffect(() => {
        document.documentElement.style.setProperty('--db-color', "#7541ac");
    });
  return (
    <>
    <NavBar />
    <div className="profile-body">
        <h1>Profile</h1>
        <button className="cool-button" onClick={() => logOut()}><h3>logout</h3></button>
        </div>
    </>
  )
}
