import React, { useEffect, useState } from 'react'
import { SiMongodb, SiFirebase, SiGraphql, SiRedis } from "react-icons/si";

import { sendRequest } from '../helpers/apiHelper';

const IconSize = `${(100)}%`;

// Icons
export const MONGO = <SiMongodb color="#55AD48" size={IconSize} />;
export const FIREBASE = <SiFirebase color="#FBC040" size={IconSize} />;
export const GRAPHQL = <SiGraphql color="#E535AB" size={IconSize} />;
export const REDIS = <SiRedis color="#C73732" size={IconSize} />;

export default function ProjectConsole({dbType}) {
  const [result,setResult] = useState("");
  useEffect(() => {
    const testGpt = async() => {
      const endpoint = 'gpt/generate'
      const res = await sendRequest(
        endpoint,
        {
          prompt: 'generate a super fancy mongo schem in node.js for a user to have a first name, last name, email, and hashed password.'
        }
        
      )
      setResult(res.payload);
    }
    testGpt();
  }, [])
  if (dbType == "mongodb"){
    return (
      <>
      {result ? <h2>{result}</h2> : <h2>Getting your schema...</h2>}
      </>
    )
  } else{
    return (
      <h1>{dbType} Support Coming Soon...</h1>
    )
  }
  
}
