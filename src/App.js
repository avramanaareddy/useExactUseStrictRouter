import React, { Component } from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
const User = (params) => {
  return (
    <div>
      <h1>The User name is {params.username}</h1>
    </div>
  );
};
export default class App extends Component {
  state = {
    loggedIn: false
  };
  loginHandle = () => {
     this.setState(prevState=>({
loggedIn:!prevState.loggedIn
     }))
  };
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={{ color: "green" }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" exact activeStyle={{ color: "green" }}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user/username"
                  exact
                  activeStyle={{ color: "green" }}
                >
                  User
                </NavLink>
              </li>
            </ul>
          </nav>
          <input
            type="button"
            value={this.state.loggedIn ? "Log out" : "Log in"}
            onClick={this.loginHandle.bind(this)}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return <div> This is Home page</div>;
              }}
            />
            {/*
  When you use exact strict, in the browser 
  if you give the url path as /about, then it 
  is not going to work, you must provide the 
  /about/ to execute the path
 */}
            <Route
              path="/about"
              exact
              strict
              render={() => {
                return <div> This is About </div>;
              }}
            />
            <Route
              path="/user/:username"
              exact
              strict
              render={({ match }) => {
                return this.state.loggedIn ? (
                  <User username={match.params.username} />
                ) : (
                  <Redirect to="/" />
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
