import React, {Fragment} from 'react';
import SelfIntro from "../skills/SelfIntro";
import SkillIntro from "../skills/SkillIntro";

const Skills = ({mode, skills}) => {
    return (
        <Fragment>
            <SelfIntro mode={mode}/>
            <SkillIntro mode={mode} skills={skills}/>
        </Fragment>
    );
};

export default Skills;
