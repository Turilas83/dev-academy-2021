import React, {useState} from 'react';

function Search () {
    const [employee, setEmployee] = useState( {
        name: '',
        amount: ''
    } );
    const[error, setError] = useState('');
    const[name, setName] = useState('');

    // Fetch JSON with given name as parameter
    const fetchUrl = async () => {
        try {
            const response = await fetch('/names/search/' + name);
            const json = await response.json();
            setEmployee(
                {
                    name: json.name,
                    amount: json.amount
                }
            );
            setError('');
        } catch (error) {
            setError('Name not found');
        }
    }
    // Check name given to form is not empty and launch fetchUrl()
    const search = (e) => {
        if (name.length > 0) {
            fetchUrl();
        } else {
            setError('Give Name');
        }
    }

    return (
        <div>
            <form>
                <input type='text' name='name' id='name' placeholder="Name to search.." value={ name } 
                       onChange={ (e) => setName(e.target.value) } />&nbsp;
                <input type='button' className="search button" name='search' value='Search' onClick={ (e) =>  search(e)  } />
            </form>
            {
                employee.name.length > 0 && error.length === 0 ?
                <div>
                    <h3>{ employee.amount } employees with name { employee.name } found!</h3>
                </div>
                : <p>{ error }</p>
            }          
        </div>
    );
}
export default Search;