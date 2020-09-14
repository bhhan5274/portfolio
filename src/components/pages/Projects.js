import React, {Fragment} from 'react';
import ProjectHeader from "../projects/ProjectHeader";
import ProjectBody from "../projects/ProjectBody";

const Projects = ({mode, projects}) => {
    return (
        <Fragment>
            <ProjectHeader mode={mode} projects={projects}/>
            <ProjectBody mode={mode} projects={projects} />
        </Fragment>
    );
};

export default Projects;
