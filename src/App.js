import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Setup from "./components/setup";
import Commands from "./components/commands";
import Other from "./components/other";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/setup" component={Setup} />
        <Route path="/commands" component={Commands} />
        <Route component={Other} />
        <header className="App-header">
          <p>Text1</p>
          <h1>Text</h1>
          <p>
            Textaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa4
          </p>
        </header>
      </Switch>
    </div>
  );
}

export default App;
