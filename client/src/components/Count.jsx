import React, { useState, useEffect } from 'react';

function Count() {
  const [count, setCount] = useState({});
  const [error, setError] = useState('Fetching...');

  // Fetch count of names
  const fetchUrl = async () => {
    try {
      const response = await fetch("/api/v1/count");
      console.log(response);
      const json = await response.json();
      setCount(json.count);
      setError('');
    } catch (error) {
        setError("Fetching data failed");
    }
  }
  // Check that there is no errors and return count of names
  useEffect( () => { fetchUrl() }, [] );
  if (error.length > 0) { return (<div>{ error }</div>) };
  return (
    <div>
      <h3>Total Count of Names: { count }</h3>
    </div>
  );
}

export default Count;
