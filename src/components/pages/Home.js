import React, {Fragment} from 'react';
import Banner from "../home/Banner";
import Skills from "../home/Skills";
import Projects from "../home/Projects";

const Home = ({mode, projects}) => {
    return (
        <Fragment>
            <Banner mode={mode} />
            <Skills mode={mode} />
            <Projects mode={mode} projects={projects} />
        </Fragment>
    );
};

export default Home;
