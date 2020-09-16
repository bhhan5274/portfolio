import React from 'react';
import {Link} from 'react-router-dom';

const ProjectItem = ({mode, project}) => {
    const skills = project.skills.map(skill => skill.name).join(", ");
    return (
        <Link className={mode === true ? "project-item" : "project-item dark"}>
            <div className="project-item__image">
                <img src={project.images[0].path} />
            </div>
            <h3 className="project-item__title">{project.title}</h3>
            <p className="project-item__text">{skills}</p>
            <p className="project-item__text">{project.timeRange.startDate} ~ {project.timeRange.endDate}</p>
        </Link>
    );
};

const ProjectBody = ({mode, projects}) => {
    return (
        <div className={mode === true ? "project-body" : "project-body dark"}>
            <div className="container">
                {projects ? projects.content.map(project => <ProjectItem key={project.id} project={project} mode={mode}/>) : ""}
            </div>
        </div>
    );
};

export default ProjectBody;
