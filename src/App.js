import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import PemWeb from "./pages/PemWeb";
import PemWeb2 from "./pages/PemWeb2";
import PemWeb3 from "./pages/PemWeb3";
import PemWeb4 from "./pages/PemWeb4";
import PemWeb5 from "./pages/PemWeb5";
import PemWeb6 from "./pages/PemWeb6";
import Sudah from "./pages/Sudah";
import WebLepas from "./pages/WebLepas";
import PemSystem from "./pages/PemSystem";
import Mini from "./pages/Mini";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Link">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/PemWeb">
              <PemWeb />
            </Route>
            <Route path="/PemWeb2">
              <PemWeb2 />
            </Route>
            <Route path="/PemWeb3">
              <PemWeb3 />
            </Route>
            <Route path="/PemWeb4">
              <PemWeb4 />
            </Route>
            <Route path="/PemWeb5">
              <PemWeb5 />
            </Route>
            <Route path="/PemWeb6">
              <PemWeb6 />
            </Route>
            <Route path="/Sudah">
              <Sudah />
            </Route>
            <Route path="/WebLepas">
              <WebLepas />{" "}
            </Route>
            <Route path="/PemSystem">
              <PemSystem />
            </Route>
            <Route path="/Mini">
              <Mini />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
