import React from 'react';
import {Link} from 'react-router-dom';

/*"id": 1,
    "title": "Test Project",
    "member": 1,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "timeRange": {
    "startDate": "2019-04-08",
        "endDate": "2020-05-08"
},*/

const ProjectItem = ({mode, project}) => {
    console.log(project);
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
                {projects.map(project => <ProjectItem key={project.id} project={project} mode={mode}/>)}
            </div>
        </div>
    );
};

export default ProjectBody;
