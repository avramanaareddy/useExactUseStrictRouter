import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route
          path="/" exact
          render={() => {
            return <div> This is Home page</div>;
          }}
        />
{/**
  When you use exact strict, in the browser 
  if you give the url path as /about, then it 
  is not going to work, you must provide the 
  /about/ to execute the path
 */}
        <Route
          path="/about/" exact strict
          render={() => {
            return <div> This is About </div>;
          }}
        />
        </Switch>
      </div>
    </Router>
  );
}
