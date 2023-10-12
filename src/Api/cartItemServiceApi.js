export const getAllItemsApi = () => {
    return fetch("http://localhost:3001/api/cart").then((response) => response.json())
}

export const updateEachItemApi = (id, data) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
   return (fetch('http://localhost:3001/api/cart/' + id, requestOptions)
      .then(response => response.json()))
}

export const addNewItemApi = (data) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
   return (fetch('http://localhost:3001/api/cart/',requestOptions)
      .then(response => response.json()))
}

