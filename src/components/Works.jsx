import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ECommerce from '../Images/E-Commerce.png';
import Cineflix from '../Images/CineFlix.png';
import AirBnb from '../Images/AirBnb.png';
import Honsel from '../Images/Honsel.png';
import HairDay from '../Images/HairDay.png';
import Crypto from '../Images/crypto.png';
import Parfum from '../Images/parfum.png';
import Rating from '../Images/rating.png';
import Qrcode from '../Images/qrcode.jpeg';
import RPS from '../Images/RockPaperScissors.png';
import Snake from '../Images/Snake.png';
import Tictactoe from '../Images/TicTacToe.png';
import Portfolio from '../Images/Portfolio.png';
import Mamamo from '../Images/Mamamo.png';
import Api from '../Images/LaravelApi.png';
import ProjectManagement from '../Images/ProjectManagement.png';
import Todo from '../Images/Todo.png'
import Weather from '../Images/Weather.png'
import node from '../Images/node.png'
import thesis from '../Images/thesis.png'
// Define a container for the grid
const GridContainer = styled(motion.div)`
  display: grid;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Styling for individual image containers
const ImageCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

// Style for the image
const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: fill;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    height: 250px;
  }

  // Hover animation for the image
  ${ImageCard}:hover & {
    transform: scale(1.1);
  }
`;

// Styling for the tech stack div at the bottom
const TechStack = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background: white;
  color: #FF5600;
  text-align: center;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled link wrapper
const ProjectLink = styled.a`
  text-decoration: none;
`;

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Main Works component
const Works = () => {
  const projects = [
    {
      id: 1,
      image: ProjectManagement,
      techStack: 'PHP Laravel ,  ReactJS , Breeze,  Tailwind CSS, MySQL',
      link: 'https://drive.google.com/file/d/18bSodD3c2J36RQZh5FIxOgQh2iX85kRA/view?usp=sharing'
    },
    {
      id: 2,
      image: Api,
      techStack: 'PHP Laravel , Breeze , Sanctum , Blade, Tailwind CSS, MySQL',
      link: 'https://drive.google.com/file/d/13MaparEThDsvqI3lxKHuPV2MKmukchH5/view?usp=sharing'
    },
    {
      id: 3,
      image: Portfolio,
      techStack: 'ReactJS, React-router-dom , Framer Motion , React-Icons, CSS , HTML',
      link: 'https://example.com/portfolio'
    },
    {
      id: 4,
      image: node,
      techStack: 'NodeJS , ExpressJs , MongoDb , PostMan, HTML',
      link: 'https://drive.google.com/file/d/13GkjK5prjTHqCTqGq1jsr9tojDbVTmu2/view?usp=sharing'
    },
    {
      id: 5,
      image: ECommerce,
      techStack: 'ReactJS, React-router-dom , CSS , HTML',
      link: 'https://tanrandel.github.io/E-Commerce/'
    },
    {
      id: 6,
      image: Cineflix,
      techStack: 'ReactJS, API , CSS , HTML',
      link: 'https://tanrandel.github.io/Movie-React/'
    },
    {
      id: 7,
      image: Todo,
      techStack: 'VueJS, Vue-Icons, CSS(Sass), HTML',
      link: 'https://tanrandel.github.io/Vue-Todos/'
    },
    {
      id: 8,
      image: Weather,
      techStack: 'VueJS, WeatherAPI, CSS, HTML',
      link: 'https://tanrandel.github.io/weather-app/'
    },
    {
      id: 9,
      image: Honsel,
      techStack: 'JavaScript, CSS , HTML',
      link: 'https://tanrandel.github.io/HonselMie/'
    },
    {
      id: 10,
      image: AirBnb,
      techStack: 'ReactJS, CSS, HTML',
      link: 'https://tanrandel.github.io/AirBnB-React/'
    },
    {
      id: 11,
      image: HairDay,
      techStack: 'ReactJS, CSS, HTML',
      link: 'https://tanrandel.github.io/Client-Mockup-HTML-CSS/'
    },
    {
      id: 12,
      image: Crypto,
      techStack: 'CSS, HTML',
      link: 'https://tanrandel.github.io/NFT-Preview-HTML-CSS-/'
    },
    {
      id: 13,
      image: Rating,
      techStack: ' CSS, HTML',
      link: 'https://tanrandel.github.io/ResulTSummary-HTML.CSS-/'
    },
    {
      id: 14,
      image: Parfum,
      techStack: ' CSS, HTML',
      link: 'https://tanrandel.github.io/ProductPreview-HTML-CSS-/'
    },
    {
      id: 15,
      image: Qrcode,
      techStack: ' CSS, HTML',
      link: 'https://tanrandel.github.io/QrCodeSample-HTML-CSS-/'
    },
    {
      id: 16,
      image: RPS,
      techStack: ' JavaScript , CSS, HTML',
      link: 'https://tanrandel.github.io/ROCKPAPERSCISSOR-JAVASCRIPT-/'
    },
    {
      id: 17,
      image: Snake,
      techStack: ' JavaScript, CSS, HTML',
      link: 'https://tanrandel.github.io/SnakeGame-JavaScript-/'
    },
    {
      id: 18,
      image: Tictactoe,
      techStack: ' JavaScript, CSS, HTML',
      link: 'https://tanrandel.github.io/Tictactoe-JAVASCRIPT-/'
    },
    {
      id: 19,
      image: Mamamo,
      techStack: ' JavaScript, CSS, HTML',
      link: 'https://tanrandel.github.io/MyFirstWebsite-HTML-CSS-/'
    },
    {
      id: 20,
      image: thesis,
      techStack: 'C++ (Capstone), Arduino Uno, Arduino R3 , Radio Module , Arduino IDE',
    },
    // More projects...
  ];

  return (
    <GridContainer
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.3 }
        }
      }}
    >
      {projects.map((project) => (
        <ProjectLink key={project.id} href={project.link} target="_blank">
          <ImageCard variants={cardVariants}>
            <Image src={project.image} alt={`Project ${project.id}`} />
            <TechStack>{project.techStack}</TechStack>
          </ImageCard>
        </ProjectLink>
      ))}
    </GridContainer>
  );
};

export default Works;
