export const sendRequest = async (path, data) => {
  let jsonResponse = {
    status: 500,
    payload: {}
  };
  let endpoint = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  try {
    const response = await fetch(`${endpoint}/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    jsonResponse.status = response.status;

    if (response.ok) {
      // Only parse JSON if the response is successful
      const json = await response.json();
      jsonResponse.payload = json;
    } else {
      // Handle HTTP errors
      console.error("HTTP Error:", response.statusText);
    }
  } catch (error) {
    // Handle network errors
    console.error("Network error:", error.message);
  }

  return jsonResponse;
}


//**************EXAMPLE OGF GPT REF FROM COMPONENT */

// const [result,setResult] = useState("");
  // useEffect(() => {
  //   const testGpt = async() => {
  //     const endpoint = 'gpt/generate'
  //     const res = await sendRequest(
  //       endpoint,
  //       {
  //         prompt: 'generate a super fancy mongo schem in node.js for a user to have a first name, last name, email, and hashed password.'
  //       }
        
  //     )
  //     setResult(res.payload);
  //   }
  //   testGpt();
  // }, [])
  // if (dbType == "mongodb"){
  //   return (
  //     <>
  //     {result ? <h2>{result}</h2> : <h2>Getting your schema...</h2>}
  //     </>
  //   )
  // } else{
  //   return (
  //     <h1>{dbType} Support Coming Soon...</h1>
  //   )
  // }