import React from 'react'
import { SiMongodb, SiFirebase, SiGraphql, SiRedis } from "react-icons/si";

const IconSize = `${(100)}%`;

// Icons
export const MONGO = <SiMongodb color="#55AD48" size={IconSize} />;
export const FIREBASE = <SiFirebase color="#FBC040" size={IconSize} />;
export const GRAPHQL = <SiGraphql color="#E535AB" size={IconSize} />;
export const REDIS = <SiRedis color="#C73732" size={IconSize} />;

export default function ProjectConsole({dbType}) {
  if (dbType == "mongodb"){
    return (
      <>{MONGO}</>
    )
  } else{
    return (
      <h1>{dbType} Support Coming Soon...</h1>
    )
  }
  
}
