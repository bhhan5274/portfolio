import React, { Fragment } from 'react';
import './css/App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/layouts/Header";
import {TOGGLE_MODE, TOGGLE_NAV} from "./actions/types";
import Home from "./components/home/Home";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import NotFound from "./components/layouts/NotFound";

function App({mode, nav, dispatch}) {

  const toggleMode = () => {
      dispatch({
          type: TOGGLE_MODE
      });
  };

  const toggleNav = () => {
      dispatch({
          type: TOGGLE_NAV
      });
  };

  return (
    <Router>
        <Fragment>
            <Header mode={mode} nav={nav} toggleMode={toggleMode} toggleNav={toggleNav} />
            <Switch>
                <Route exact path="/home" render={() => <Home mode={mode} />} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/projects" component={Projects} />
                <Route component={NotFound} />
            </Switch>
        </Fragment>
    </Router>
  );
}

const mapStateToProps = (state) => ({
    mode: state.mode,
    nav: state.nav
});

export default connect(mapStateToProps)(App);
