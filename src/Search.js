// import React from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

// library.add(faCheckCircle)

// const Search = () => {
//   return (
//     <div className="search" align="center">
//       <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Github Username" style={{width: '25%'}}></input>
//       <FontAwesomeIcon icon="check-circle" color="green" style={{marginLeft: -18}}/>
//     </div>
//   );
// };

// export default Search;

import React from 'react';

const Search = () => {
  return (
    <div>
      
      <div className="container">
        <section className="search six offset-by-three columns">
          <form>
            <button type="submit">
              <span className="fa fa-check-circle fa-3x" />
            </button>
            <input
              className="u-full-width"
              type="text"
              name="username"
              placeholder="Enter Github Username"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Search;