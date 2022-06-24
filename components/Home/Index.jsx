import React from 'react';

//data
import { homeData } from '../../data/homeData';

//styles
import { HomeLayout, HomeInfo, HomeInfoCVButton, HomeDescription, HomeProyectsDisplayLayout, HomeProyectsDisplay, HomeProyect, HomeInfoText } from './homeElements';

const Home = () => {

    //destructuring data
    const { homeinfo } = homeData;
    const { homeprojects } = homeData;

    return ( 
        <HomeLayout>
            <HomeInfo
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: .5 }}
            >
                <img src={homeinfo.infoprofileimage} alt="profile photo" />
                <HomeInfoText>
                    <h1>{homeinfo.infotitle}</h1>
                    <HomeDescription>{homeinfo.infodescription}</HomeDescription>
                    <HomeDescription>{homeinfo.infodescription2}</HomeDescription>
                    <HomeInfoCVButton>{homeinfo.infobutton}</HomeInfoCVButton>
                </HomeInfoText>
            </HomeInfo>
            <HomeProyectsDisplayLayout
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
            >
                <h1>{homeprojects.projectstitle}</h1>
                <HomeProyectsDisplay
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .3 }}
                >
                    {homeprojects.projects.map(project => 
                        <HomeProyect
                            initial={{
                                scale: 1,
                                borderRadius: '1rem',
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0px 0px 30px -5px rgba(255,255,255,0.5)',
                            }}
                            transition= {{ duration: .4, delay: .5 }}
                            image={project.image}
                            key={project.id}
                            href={project.url}
                        > 
                                <h2>{project.title}</h2> 
                        </HomeProyect>    
                    )}
                </HomeProyectsDisplay>
            </HomeProyectsDisplayLayout>
        </HomeLayout>
    );
}
 
export default Home;