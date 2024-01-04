import React from 'react'
import { MdOutlineDesignServices } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


import "../styles/navbar.css"
import { useNavigate } from 'react-router-dom';

const IconSize = `${(100)}%`;

// Icons
export const DESIGNS = <MdOutlineDesignServices color="#fff" size={IconSize} />;
export const PROFILE = <CgProfile color="#7541ac" size={IconSize} />;

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <div className="navbar-container">
            <div onClick={() => navigate("/dbpage")} className="nav-item">{DESIGNS}</div>
            <div onClick={() => navigate("/profile")} className="nav-item">{PROFILE}</div>
        </div>
    )
}
