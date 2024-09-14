import { FaProjectDiagram } from "react-icons/fa";
import { SiCyberdefenders } from "react-icons/si";
import React from 'react';
import styled from 'styled-components';
import transition from '../transition';
import { motion } from 'framer-motion';
import { MdCode, MdImportantDevices } from "react-icons/md";
import { SiRobotframework } from "react-icons/si";
import { VscDebugAll } from "react-icons/vsc";
import { TbWorldSearch } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
import { PiShareNetworkThin } from "react-icons/pi";

// Adjusted ParentGrid to use CSS Grid for better responsiveness
const ParentGrid = styled.section`
  display: grid;
  gap: 2rem;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 600px) {
   grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 800px) {
   grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1000px) {
   grid-template-columns: repeat(4, 1fr); }
  }

 
`;

const Div = styled.div`
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  background-color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  h2, p {
    font-family: 'NeueRegular', sans-serif;
    font-weight: normal;
    line-height: 1.2;
    letter-spacing: -1.0px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.section`
  display: flex;
  justify-content: center;
  h1 {
    font-size: 3vw;
    line-height: 0.94;
    letter-spacing: -1.5px;
    font-weight: normal;
    color: #333;
    span.sight {
      color: #FF5600;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 5vw;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 6vw;
    }
  }
`;

const Skills = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <main>
        <Title>
          <h1>My <span className='sight'>Pixel</span> Perfect <span className='sight'>Skills</span></h1>
        </Title>
        <ParentGrid>
          <Div>
            <MdCode size={48} color="#FF5600" />
            <h2>Coding</h2>
            <p>Proficient in JavaScript, HTML, CSS, and various web development frameworks.</p>
          </Div>
          <Div>
            <SiRobotframework size={48} color="#FF5600" />
            <h2>Coding Frameworks</h2>
            <p>Experienced in working with popular web development frameworks.</p>
          </Div>
          <Div>
            <VscDebugAll size={48} color="#FF5600" />
            <h2>Testing and Debugging</h2>
            <p>Skilled in testing and debugging web applications to ensure quality.</p>
          </Div>
          <Div>
            <TbWorldSearch size={48} color="#FF5600" />
            <h2>SEO</h2>
            <p>Knowledgeable in search engine optimization techniques for better web visibility.</p>
          </Div>
          <Div>
            <BsGit size={48} color="#FF5600" />
            <h2>Version Control</h2>
            <p>Proficient in Git and version control practices.</p>
          </Div>
          <Div>
            <FaUserCheck size={48} color="#FF5600" />
            <h2>UI/UX</h2>
            <p>Focused on creating user-friendly and intuitive web interfaces.</p>
          </Div>
          <Div>
            <MdImportantDevices size={48} color="#FF5600" />
            <h2>Responsive Design</h2>
            <p>Experienced in designing responsive web layouts for various devices.</p>
          </Div>
          <Div>
            <PiShareNetworkThin size={48} color="#FF5600" />
            <h2>Network Connection</h2>
            <p>Understanding of network protocols and web connectivity.</p>
          </Div>
          {/* Added Project Management */}
          <Div>
            <FaProjectDiagram size={48} color="#FF5600" />
            <h2>Project Management</h2>
            <p>Experienced in managing complex projects, ensuring timely delivery and quality output.</p>
          </Div>
          {/* Added Cybersecurity */}
          <Div>
            <SiCyberdefenders size={48} color="#FF5600" />
            <h2>Cybersecurity</h2>
            <p>Knowledgeable in securing applications, mitigating threats, and ensuring data integrity.</p>
          </Div>
        </ParentGrid>
      </main>
    </motion.div>
  );
};

export default transition(Skills);
