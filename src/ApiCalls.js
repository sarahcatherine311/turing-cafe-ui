import React from "react";

const fetchData = () => {
  return fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())    
}

export default fetchData;