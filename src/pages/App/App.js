import './App.css';
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Contact from '../Contact/Contact'


/*
  Color lost

  Ice Cold: #a0d2eb
  Freeze Purple: #e5eaf5
  Medium Purple: #d0bdf4
  Purple Pain: #8458B3
  Heavy Purple: #a28089

  Are ya yellow?!: #feda6a
  Silver Fox: #d4d4dc
  Deep Matte Grey: #393f4d
  Dark Slate: #1d1e22

  neon Blue : #00FFFF
*/



function App() {
  return (
    <>
      <NavBar/>
      <Switch>
          <Route exact={true} path="/" render={() => (
              <>
                <Home />
              </>
            )}
          />
          <Route exact={true} path="/projects" render={() => (
              <>
                <Projects />
              </>
            )}
          />
          <Route exact={true} path="/about" render={() => (
              <>
                <About />
              </>
            )}
          />
          <Route exact={true} path="/contact" render={() => (
              <>
                <Contact />
              </>
            )}
          />
      </Switch>
    </>
  );
}

export default App;
