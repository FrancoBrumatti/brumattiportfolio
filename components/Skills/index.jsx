import React from 'react';

//data
import { skillsData } from '../../data/skillsData';

//styles
import { Skill, SkillsContent, SkillsLayout } from './skillsElements';


const Skills = () => {
    return ( 
       <SkillsLayout>
           <h1>{skillsData.title}</h1>
           <SkillsContent>
                {skillsData.skills.map(skill => 
                    <Skill key={skill.id}>
                        <img src={skill.image} alt="imagen skills" />
                        <h2>{skill.title}</h2>
                    </Skill>    
                )}
           </SkillsContent>
       </SkillsLayout> 
    );
}
 
export default Skills;