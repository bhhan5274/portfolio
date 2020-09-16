import React from 'react';
import './css/App.css';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/layouts/Header";
import {TOGGLE_MODE, TOGGLE_NAV} from "./actions/types";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import NotFound from "./components/layouts/NotFound";
import Footer from "./components/layouts/Footer";

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
            <div className={mode === true ? "background" : "background dark"}>
                <Header mode={mode} nav={nav} toggleMode={toggleMode} toggleNav={toggleNav}/>
                <Switch>
                    <Route exact path="/home" render={() => <Home />}/>
                    <Route exact path="/skills" render={() => <Skills />}/>
                    <Route exact path="/projects" render={() => <Projects />}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer mode={mode}/>
            </div>
        </Router>
    );
}

const mapStateToProps = (state) => ({
    mode: state.mode,
    nav: state.nav
});

export default connect(mapStateToProps)(App);
