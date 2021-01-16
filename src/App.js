import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Setup from "./components/setup";
import Commands from "./components/commands";
import Other from "./components/other";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/setup" component={Setup} />
      <Route path="/commands" component={Commands} />
      <Route component={Other} />
    </Switch>
  );
}

export default App;
