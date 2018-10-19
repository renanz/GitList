import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle)

const Search = () => {
  return (
    <div className="search" align="center">
      <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Github Username" style={{width: '25%'}}></input>
      <FontAwesomeIcon icon="check-circle" color="green" style={{marginLeft: -18}}/>
    </div>
  );
};

export default Search;