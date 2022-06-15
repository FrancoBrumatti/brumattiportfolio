import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Animation = (props) => {
  const [ref, inView] = useInView({ threshold: 0.01 });
  const animation = useAnimation();

  if (inView) {
    animation.start({
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: .5,
        delay: 0.3,
      },
    });
  }
  return (
    <div
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: props.direction === 'vertical' ? '-30' : '0', x: props.direction === 'horizontal' ? '-30' : '0' }}
        animate={animation}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default Animation;