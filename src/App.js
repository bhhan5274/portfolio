import React, {Fragment, useEffect} from 'react';
import './css/App.css';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/layouts/Header";
import {GET_PROJECTS, TOGGLE_MODE, TOGGLE_NAV} from "./actions/types";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import NotFound from "./components/layouts/NotFound";
import axios from 'axios';
import Footer from "./components/layouts/Footer";

function App({mode, nav, projects, dispatch}) {

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

  const getProjects = async () => {
      const res = await axios.get("http://localhost:5555/bhhan/v1/projects");
      dispatch({
          type: GET_PROJECTS,
          payload: res.data
      });
  };

  useEffect(() => {
      getProjects();
  }, []);

  return (
    <Router>
        <Fragment>
            <Header mode={mode} nav={nav} toggleMode={toggleMode} toggleNav={toggleNav} />
            <Switch>
                <Route exact path="/home" render={() => <Home mode={mode} projects={projects} />} />
                <Route exact path="/skills" render={() => <Skills />} />
                <Route exact path="/projects" component={() => <Projects />} />
                <Route component={NotFound} />
            </Switch>
            <Footer mode={mode} />
        </Fragment>
    </Router>
  );
}

const mapStateToProps = (state) => ({
    mode: state.mode,
    nav: state.nav,
    projects: state.project
});

export default connect(mapStateToProps)(App);
