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
