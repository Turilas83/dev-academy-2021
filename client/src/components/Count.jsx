import React, { useState, useEffect } from 'react';

function Count() {
  const [count, setCount] = useState({});
  const [error, setError] = useState('Fetching...');

  const fetchUrl = async () => {
    try {
      const response = await fetch("http://localhost:9000/names/count");
      console.log(response);
      const json = await response.json();
      setCount(json.count);
      setError('');
    } catch (error) {
        setError("Fetching data failed");
    }
  }
  useEffect( () => { fetchUrl() }, [] );
  if (error.length > 0) { return (<div>{ error }</div>) };
  return (
    <div>
      <h3>Total Count of Names: { count }</h3>
    </div>
  );
}

export default Count;
