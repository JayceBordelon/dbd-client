
export const sendRequest = async (path, data) => {
  let endpoint = import.meta.env.VITE_API_URL || 'http://localhost:3000'; // Fallback to localhost
  const response = await fetch(`${endpoint}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok){
    return 200;
  }
  return response.status;
}
