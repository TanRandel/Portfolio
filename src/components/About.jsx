import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import transition from '../transition';

const Article = styled.article`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  section {
    
    margin: 0 auto;
  }
`;

const Header = styled.h1`
  margin-top: 40px;
  margin-bottom: 50px;
  line-height: 0.94;
  letter-spacing: -1.8px;
  font-weight: normal;

  .sight {
    color: #FF5600;
  }

   @media (min-width: 200px) {
   font-size : 2.5em;
  }
  
  @media (min-width: 600px) {
   font-size : 3.5em;
  }
  
  @media (min-width: 800px) {
  font-size : 4.5em;
  }

  @media (min-width: 1000px) {
    font-size : 5em;
  }
  

 

 
`;

const About = () => {
  
  const fadeInAnimation = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        delay: 0.2,
      },
    },
  };

  return (
    <Article>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        transition={{ duration: 2}} // You can adjust the duration as needed
      >
        <Header>
          Hi. I’m Randel.<br />A <span className='sight'>Junior Developer.</span>,<br />focused on creating efficient<br /> and scalable solutions <br/>
          <span className='sn'>——</span>  a graduate of  <span className='sight'>Computer Engineering.</span>
        </Header>
      </motion.section>
    </Article>
  );
};

export default transition(About);