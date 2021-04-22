import React from 'react';
import {Link} from "react-router-dom";

const Skills = ({mode}) => {
    return (
        <section className={mode === true ? "skills-info" : "skills-info dark"}>
            <div className="container">
                <h1 className={mode === true ? "skills-info__title" : "skills-info__title dark"}>What I Can Do</h1>

                <div className="skills-info__box">
                    <Link className={mode === true ? "skills-info__item" : "skills-info__item dark"} to='/skills'>
                        <i className="fas fa-file-code" />
                        <h1 className="skills-info__subject">Application</h1>
                        <p className="skills-info__content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    </Link>
                    <Link className={mode === true ? "skills-info__item" : "skills-info__item dark"} to='/skills'>
                        <i className="fas fa-desktop" />
                        <h1 className="skills-info__subject">Frontend</h1>
                        <p className="skills-info__content">askn dlasdnalsdnasdsadas kasksaasdasd asdasdasdadsasd asdsadasdadas fdsklfslhfslkhfslkhd adksljadlkjadlkadjs asdlkjasdlakjsdlkasj </p>
                    </Link>
                    <Link className={mode === true ? "skills-info__item" : "skills-info__item dark"} to='/skills'>
                        <i className="fas fa-server" />
                        <h1 className="skills-info__subject">Backend</h1>
                        <p className="skills-info__content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    </Link>
                    <Link className={mode === true ? "skills-info__item" : "skills-info__item dark"} to='/skills'>
                        <i className="fas fa-cogs" />
                        <h1 className="skills-info__subject">DevOps</h1>
                        <p className="skills-info__content">Lorempsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Skills;
