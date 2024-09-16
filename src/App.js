import React, {useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [countryCode, setCountryCode] = useState('');

  const handleFetchData = () => {
    fetch('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'cache': 'no-cache',
      },
      body: JSON.stringify({
        countryCode: countryCode
      }),
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      setData(data.data.country);
    })
    .catch(error => {
      setError(error);
    });    
  };

  return (
    <div>
      <h1>GraphQL Data</h1>

      <input 
        type="text"
        placeholder="Enter country code"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
      />

      <button onClick={handleFetchData}>Fetch data</button>

      {error && <div>Error: {error.message}</div>}

      {data && (
        <div>
          <h2>Country details</h2>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Capital:</strong> {data.capital}</p>
        </div>
      )}
    </div>
  );
}

export default App;
