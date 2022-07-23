import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import Users from './Users';
import Profile from './components/Profile';

const Root = () => {
  const handleClick = () => {
    console.log('Thanks for clicking!');
  };

  return (
    <BrowserRouter>
      <div>
        <NavLink exact to='/' activeClassName='active red' activeStyle={{fontWeight: 'bold'}}>App</NavLink>
        <NavLink to='/users' activeClassName='active green'>Users</NavLink>
        <NavLink to='/users/1' activeClassName='active blue'>Andrew's Profile</NavLink>

        {/* Link with onClick prop */}
        <NavLink exact to='/' onClick={handleClick}>App with click handler</NavLink>

        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route exact path='/users'>
            <Users />
          </Route>
          <Route path='/users/:userId'>
            <Profile />
          </Route>
          <Route>
            <h1>404: Page not found</h1>
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
