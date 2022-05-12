import React from 'react';
import { motion } from 'framer-motion';

//data
import { homeData } from '../../data/homeData';

//styles
import { HomeLayout, HomeInfo, HomeCVButton, HomeDescription, HomeProyectsDisplayLayout, HomeProyectsDisplay, HomeProyect } from './homeElements';

const Home = () => {

    const { homeinfo } = homeData;
    const { homeprojects } = homeData;

    console.log(homeprojects)

    return ( 
        <HomeLayout>
            <HomeInfo>
                <img src={homeinfo.infoprofileimage} alt="profile photo" />
                <h1>{homeinfo.infotitle}</h1>
                <HomeCVButton>{homeinfo.infobutton}</HomeCVButton>
                <HomeDescription>{homeinfo.infodescription}</HomeDescription>
                <HomeDescription>{homeinfo.infodescription2}</HomeDescription>
            </HomeInfo>
            <HomeProyectsDisplayLayout>
                <h1>{homeprojects.projectstitle}</h1>
                <HomeProyectsDisplay>
                    {homeprojects.projects.map(project => 
                    <motion.div
                        initial={{
                            scale: 1,
                            borderRadius: '1rem',
                        }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0px 0px 30px -5px rgba(255,255,255,0.5)',
                        }}
                        transition= {{ duration: .8 }}
                    >
                        <HomeProyect image={project.projectimage}>
                            <h2>{project.projecttitle}</h2>
                        </HomeProyect>
                    </motion.div>    
                    )}
                </HomeProyectsDisplay>
            </HomeProyectsDisplayLayout>
        </HomeLayout>
    );
}
 
export default Home;