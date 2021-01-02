import React, { useState, useEffect } from 'react';

function ListNames(props) {
    const [names, setEmployees] = useState({});
    const[error, setError] = useState('Fetching...');

    // Fettch list of names, sort names by given parameter
    const fetchUrl = async () => {
        try {
            const response = await fetch("http://localhost:9000/names/" + props.sort);
            console.log(response);
            const json = await response.json();
            setEmployees(json.names);
            setError('');
        } catch (error) {
            setError("Fetching data failed");
        }
    }
    // Change value of heading depending on given parameter
    let heading;

    if (props.sort === "alphabetical-order") {
      heading = "Names in Alphabetical Order";
    } else {
      heading = "Names in Top Order";
    }
    // Fetch names JSON after render and return table with name and amount values
    useEffect( () => { fetchUrl() }, [] );
    if (error.length > 0) { return (<div>{ error }</div>) };
    return ( 
      <div>
        <h2>{heading}</h2>
        <table cellSpacing="20">
          <thead>
            <tr>
              <th className="thname">Name</th>
              <th className="thname">Amount</th>
            </tr>
          </thead>
          <tbody>
            {names.map(name =>
              <tr key={name.name}>
                <td>{name.name}</td> 
                <td>{name.amount}</td>
              </tr>
            )} 
          </tbody>
        </table>
      </div> 
    );
}

export default ListNames;