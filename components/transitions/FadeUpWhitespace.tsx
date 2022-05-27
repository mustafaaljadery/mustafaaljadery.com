import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface Props {
  children: JSX.Element;
}

const container = {
  visiable: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: {
    y: '200%',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.25 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.15 },
  },
};

const FadeUpWhitespace: React.FC<Props> = ({ children }) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={container}
      >
        <span style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.div
            style={{ display: 'inline-block' }}
            variants={item}
          >
            {children}
          </motion.div>
        </span>
      </motion.div>
    </div>
  );
};

export default FadeUpWhitespace;
