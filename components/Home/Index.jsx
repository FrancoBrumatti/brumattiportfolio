import React from 'react';

import { HomeLayout, HomeInfo } from './homeElements';

const Home = () => {
    return ( 
        <HomeLayout>
            <HomeInfo>
                <img src="/homeImg.jpg" alt="profile photo" />
            </HomeInfo>
        </HomeLayout>
    );
}
 
export default Home;