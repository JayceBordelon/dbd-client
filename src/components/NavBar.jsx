import React from 'react'
import { SiMongodb, SiApachecassandra, SiAmazondynamodb, SiFirebase, SiGraphql, SiMysql, SiPostgresql, SiRedis } from "react-icons/si";
import { CgProfile } from "react-icons/cg";


import "../styles/navbar.css"
import { useNavigate } from 'react-router-dom';

const IconSize = `${(100)}%`;

// Icons
const MONGO = <SiMongodb color="#55AD48" size={IconSize} />;
// const CASSANDRA = <SiApachecassandra color="#BCE7FB" size={IconSize} />;
// const DYNAMO = <SiAmazondynamodb color="#4280C5" size={IconSize} />;
const FIREBASE = <SiFirebase color="#FBC040" size={IconSize} />;
const GRAPHQL = <SiGraphql color="#E535AB" size={IconSize} />;
// const MYSQL = <SiMysql color="#F29111" size={IconSize} />;
// const POSTGRESQL = <SiPostgresql color="#386696" size={IconSize} />;
const REDIS = <SiRedis color="#C73732" size={IconSize} />;
const PROFILE = <CgProfile color="#7541ac" size={IconSize} />;

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <div className="navbar-container">
            <div onClick={() => navigate("/dbpage/mongodb")} className="nav-item">{MONGO}</div>
            {/* <div className="nav-item">{CASSANDRA}</div> */}
            <div onClick={() => navigate("/dbpage/firebase")} className="nav-item">{FIREBASE}</div>
            {/* <div className="nav-item">{MYSQL}</div> */}
            <div onClick={() => navigate("/dbpage/redis")} className="nav-item">{REDIS}</div>
            <div onClick={() => navigate("/dbpage/graphql")} className="nav-item">{GRAPHQL}</div>
            <div onClick={() => navigate("/profile")} className="nav-item">{PROFILE}</div>
        </div>
    )
}
