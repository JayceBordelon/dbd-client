// Dependencies
import React, { useState, useEffect } from 'react';
import { SiMongodb, SiApachecassandra, SiAmazondynamodb, SiFirebase, SiGraphql, SiMysql, SiPostgresql, SiRedis } from "react-icons/si";

const IconSize = `${(100)}%`;

// Icons
const MONGO = <SiMongodb color="#55AD48" size={IconSize} />;
const CASSANDRA = <SiApachecassandra color="#BCE7FB" size={IconSize} />;
const DYNAMO = <SiAmazondynamodb color="#4280C5" size={IconSize} />;
const FIREBASE = <SiFirebase color="#FBC040" size={IconSize} />;
const GRAPHQL = <SiGraphql color="#E535AB" size={IconSize} />;
const MYSQL = <SiMysql color="#F29111" size={IconSize} />;
const POSTGRESQL = <SiPostgresql color="#386696" size={IconSize} />;
const REDIS = <SiRedis color="#C73732" size={IconSize} />;

// Styles
import "../styles/landing.css"

export const ImageGallery = () => {
  const imageSrcs = [MONGO, CASSANDRA, DYNAMO, FIREBASE, GRAPHQL, MYSQL, POSTGRESQL, REDIS];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageSrcs.length);
    }, 1000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [imageSrcs.length]);

  return (
    <div className="image-gallery">
      {imageSrcs.map((src, index) => (
        <div key={index} className={`image-gallery-item ${index === currentImageIndex ? 'show' : ''}`}>
          {src}
        </div>
      ))}
    </div>
  );
};



export default function Landing() {

  const goToSignUp = () => {
    window.location="/signup";
  }

  return (
    <div className="intro-container area">
      <h1>Foresite Is Better Than Hindsite. 
      </h1><h1>Design The DB First.</h1>
      <ImageGallery /> 
      <button className="cool-button" onClick={()=>goToSignUp()}><h3>Get Started</h3></button>
      <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      
    </div>
  );
}

