import React from 'react';
import Image from 'next/image';

//data
import { skillsData } from '../../data/skillsData';

//styles
import { Skill, SkillsContent, SkillsLayout } from './skillsElements';


const Skills = () => {
    return ( 
       <SkillsLayout
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: .5 }}
       >
           <h1>{skillsData.title}</h1>
           <SkillsContent>
                {skillsData.skills.map(skill => 
                    <Skill
                        key={skill.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .3, duration: .3, type: 'easeout' }}
                    >
                        <Image src={skill.image} layout='fixed' width={256} height={256} alt='skill image' />
                        <h2>{skill.title}</h2>
                    </Skill>    
                )}
           </SkillsContent>
       </SkillsLayout> 
    );
}
 
export default Skills;