import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.js';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="container">
        <h1 />
      </div>
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={({ history }) => (
            <Search
              onSubmitUsername={username =>
                history.push(`/${username}/projects`)
              }
            />
          )}
        />
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
