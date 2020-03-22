import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import BooksContainer from "./pages/google";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
  
          <Route exact path ="/" component ={BooksContainer} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
