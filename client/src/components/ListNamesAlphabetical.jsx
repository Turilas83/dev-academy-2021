import React, { useState, useEffect } from 'react';

function ListNamesAlphabetical(props) {
    const [names, setEmployees] = useState({});
    const[error, setError] = useState('Fetching...');

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

    let heading;

    if (props.sort === "alphabetical-order") {
      heading = "Names in Alphabetical Order";
    } else {
      heading = "Names in Top Order";
    }

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

export default ListNamesAlphabetical;