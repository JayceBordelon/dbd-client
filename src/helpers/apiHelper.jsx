const endpoint = "http://localhost:3000";

export const sendRequest = async (path, data) => {
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
