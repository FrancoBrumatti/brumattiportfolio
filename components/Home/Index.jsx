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
            <HomeInfo>
                <img src={homeinfo.infoprofileimage} alt="profile photo" />
                <HomeInfoText>
                    <h1>{homeinfo.infotitle}</h1>
                    <HomeDescription>{homeinfo.infodescription}</HomeDescription>
                    <HomeDescription>{homeinfo.infodescription2}</HomeDescription>
                    <HomeInfoCVButton>{homeinfo.infobutton}</HomeInfoCVButton>
                </HomeInfoText>
            </HomeInfo>
            <HomeProyectsDisplayLayout>
                <h1>{homeprojects.projectstitle}</h1>
                <HomeProyectsDisplay>
                    {homeprojects.projects.map(project => 
                    <HomeProyect
                        initial={{
                            scale: 1,
                            borderRadius: '1rem',
                        }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0px 0px 30px -5px rgba(255,255,255,0.5)',
                        }}
                        transition= {{ duration: .4 }}
                        image={project.image}
                        key={project.id}
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