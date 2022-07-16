import React from 'react';
import Image from 'next/image';

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
                <Image src={homeinfo.infoprofileimage} layout='fixed' width={250} height={250} alt="profile photo" />
                <HomeInfoText>
                    <h1>{homeinfo.infotitle}</h1>
                    <HomeDescription>{homeinfo.infodescription}</HomeDescription>
                </HomeInfoText>
                <HomeInfoCVButton href='/cv.png' download={true}>{homeinfo.infobutton}</HomeInfoCVButton>
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
                                boxShadow: '0px 0px 30px -5px #ffffff',
                            }}
                            transition= {{ duration: .4 }}
                            key={project.id}
                            href={project.url}
                        >
                            <Image src={project.image} layout='fill' alt='project image'/> 
                            <h2>{project.title}</h2> 
                        </HomeProyect>    
                    )}
                </HomeProyectsDisplay>
            </HomeProyectsDisplayLayout>
        </HomeLayout>
    );
}
 
export default Home;