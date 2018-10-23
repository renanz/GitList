import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.js';
import Header from './Header.js';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={Search} />
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));