import { FaLaravel } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { PiFileSqlDuotone } from "react-icons/pi";
import { FaNodeJs } from "react-icons/fa";
import React from 'react';
import styled from 'styled-components';
import transition from '../transition';
import { motion } from 'framer-motion';
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTailwindCss, BiLogoGithub } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

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
  height: 100%;
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

const Tools = () => {
  const parentGridVariants = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };
  
  return (
    <motion.div
      variants={parentGridVariants}
      initial="hidden"
      animate="visible"
    >
      <main>
        <Title>
          <h1>My <span className="sight">Tech</span> Perfect <span className="sight">Tools</span></h1>
        </Title>
        <ParentGrid>
          <Div>
            <SiJavascript size={48} color="#FF5600" />
            <h2>JavaScript</h2>
            <p>JavaScript empowers me to infuse interactivity into web applications, creating dynamic, engaging user experiences.</p>
          </Div>
          <Div>
            <FaNodeJs size={48} color="#FF5600" />
            <h2>NodeJS</h2>
            <p>NodeJS is my choice for building scalable, high-performance backend services with a non-blocking event-driven architecture.</p>
          </Div>
          <Div>
            <FaReact size={48} color="#FF5600" />
            <h2>ReactJS</h2>
            <p>ReactJS, a premier library for UI development, is my choice for building efficient, reusable, and feature-rich user interfaces.</p>
          </Div>
          <Div>
            <FaLaravel size={48} color="#FF5600" />
            <h2>Laravel</h2>
            <p>Laravel is my go-to PHP framework for building robust backends with clean, elegant syntax and powerful tools for scaling applications.</p>
          </Div>
          <Div>
            <PiFileSqlDuotone size={48} color="#FF5600" />
            <h2>SQL</h2>
            <p>SQL is my query language for managing relational databases, enabling structured data storage and retrieval.</p>
          </Div>
          <Div>
            <FaVuejs size={48} color="#FF5600" />
            <h2>VueJS</h2>
            <p>VueJS is my framework of choice for building reactive, modern front-end interfaces with simplicity and flexibility.</p>
          </Div>
          <Div>
            <SiPostman size={48} color="#FF5600" />
            <h2>Postman</h2>
            <p>Postman is my essential API testing tool, helping me debug and document API endpoints for seamless development workflows.</p>
          </Div>
          <Div>
            <BiLogoGithub size={48} color="#FF5600" />
            <h2>GitHub</h2>
            <p>GitHub is my cornerstone for version control, facilitating collaborative coding, code repository management, and meticulous version tracking.</p>
          </Div>
          <Div>
            <TbBrandVscode size={48} color="#FF5600" />
            <h2>VS Code</h2>
            <p>VS Code is my trusted code editor, the central hub for proficiently writing, debugging, and organizing my web development projects.</p>
          </Div>
          <Div>
            <BiLogoTailwindCss size={48} color="#FF5600" />
            <h2>TailwindCSS</h2>
            <p>TailwindCSS, a utility-first framework, streamlines my styling process, ensuring consistent design systems and efficient development.</p>
          </Div>
          <Div>
            <IoLogoCss3 size={48} color="#FF5600" />
            <h2>CSS</h2>
            <p>CSS is my artistic toolkit, allowing me to craft captivating and responsive user interfaces with aesthetic finesse.</p>
          </Div>
          <Div>
            <AiFillHtml5 size={48} color="#FF5600" />
            <h2>HTML</h2>
            <p>HTML serves as the bedrock of web development, enabling me to architect web pages and structure content with precision.</p>
          </Div>
        </ParentGrid>
      </main>
    </motion.div>
  );
};

export default transition(Tools);
