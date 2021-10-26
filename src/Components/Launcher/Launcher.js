import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import MainGame from "./../MainGame/MainGame";
import { Summary } from "../Summary/Summary";
import Header from "../Header/Header";

const Launcher = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={MainGame} />
          <Route exact path="/summary" component={Summary} />
          <Route exact path="/trivia" component={MainGame} />
        </Switch>
      </Router>
    </div>
  );
};

export default Launcher;
