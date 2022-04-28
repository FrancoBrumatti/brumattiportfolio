import React from 'react';

import { motion } from 'framer-motion';

//styles
import { BackgroundSvg } from './svgBackgroundElements';

const SvgBackground = () => {
    return ( 
        <BackgroundSvg>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 560">
                <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
                <motion.path
                initial={{
                  scale: 1,
                  opacity: 1
                }}
                transition={{ repeat: Infinity, duration: 3, repeatType: 'mirror' }}
                animate={{
                  scale: 1.2,
                  opacity: 0.8
                }}
                 d="M 0,66 C 57.6,91.6 172.8,199 288,194 C 403.2,189 460.8,37 576,41 C 691.2,45 748.8,195.4 864,214 C 979.2,232.6 1036.8,144 1152,134 C 1267.2,124 1382.4,158 1440,164L1440 560L0 560z" fill="#184a7e"></motion.path>
                <motion.path
                initial={{
                  scale: 1,
                  opacity: 0.8
                }}
                transition={{ repeat: Infinity, duration: 5, repeatType: 'mirror' }}
                animate={{
                  scale: 1.5,
                  opacity: 1
                }}
                 d="M 0,454 C 96,436 288,350.4 480,364 C 672,377.6 768,531.2 960,522 C 1152,512.8 1344,358.8 1440,318L1440 560L0 560z" fill="#2264ab"></motion.path>
        </svg>
            
        </BackgroundSvg>
     );
}
 
export default SvgBackground;