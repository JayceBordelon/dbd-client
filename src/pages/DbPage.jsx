import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectConsole from '../components/ProjectConsole';
import NavBar from '../components/NavBar';

import "../styles/dbpage.css";

export default function DbPage() {
    const { dbname } = useParams();

    const setDbColor = (dbname) => {
        const dbToColor = {
            "mongodb": "#55AD48",
            "firebase": "#FBC040",
            "graphql": "#E535AB",
            "redis": "#C73732"
        }
        const color = dbToColor[dbname];
        if (color) {
            document.documentElement.style.setProperty('--db-color', color);
        }
    }

    useEffect(() => {
        setDbColor(dbname);
    })

    return (
        <>
        <NavBar />
        <div className="dbpage-body">
            <ProjectConsole dbType={dbname} />
        </div>
        </>
    );
}
