import React from 'react';

import { motion } from 'framer-motion';

import { HomeLayout, HomeInfo, HomeCVButton, HomeDescription, HomeProyectsDisplayLayout, HomeProyectsDisplay, HomeProyect } from './homeElements';

const Home = () => {
    return ( 
        <HomeLayout>
            <HomeInfo>
                <img src="/homeImg.jpg" alt="profile photo" />
                <h1>Web Developer</h1>
                <HomeCVButton>Curriculum Vitae</HomeCVButton>
                <HomeDescription>Soy <span>Franco Brumatti</span>, un web developer de formacion <span>autodidacta</span>. Busco desafios para seguir aprendiendo continuamente, Lorem ipsum dolor sit amet.</HomeDescription>
                <HomeDescription>Portfolio relizado 100% por mi.</HomeDescription>
            </HomeInfo>
            <HomeProyectsDisplayLayout>
                <h1>Mis Proyectos</h1>
                <HomeProyectsDisplay>

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
                        <HomeProyect>
                            <h2>Titulo del proyecto</h2>
                        </HomeProyect>
                    </motion.div>

                </HomeProyectsDisplay>
            </HomeProyectsDisplayLayout>
        </HomeLayout>
    );
}
 
export default Home;