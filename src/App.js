import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.js';
import { BrowserRouter, Route } from 'react-router-dom';
import ListProjects from './ListProject';

const App = () => {
  return (
    <BrowserRouter>
      <div>
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
        <Route exact path="/:username/projects" component={ListProjects} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
