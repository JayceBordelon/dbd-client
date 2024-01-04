import React from 'react';
import ProjectConsole from '../components/ProjectConsole';
import NavBar from '../components/NavBar';

import "../styles/dbpage.css";

export default function DbPage() {

    return (
        <>
        <NavBar />
        <div className="dbpage-body">
            <ProjectConsole />
        </div>
        </>
    );
}
