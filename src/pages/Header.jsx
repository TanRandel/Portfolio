import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu and close
import transition from '../transition';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 0;
  background-color: #fff;
  position: relative;
`;

const Container = styled.section`
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  color: #7a7a7a;
  font-weight: lighter;
  

  
`;

const Paragraph = styled.p`
  margin: 0;
  opacity: 0.55;
  font-weight: normal;
  font-size: 1rem;
`;

const Description = styled.span`
  font-size: 1rem;
  margin-right: 0.3rem;
  font-weight: normal;
`;

const Icon = styled.i`
  font-size: 1.2rem;
  vertical-align: middle;
  font-weight: normal;
  font-style: normal;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 10px;
      display: ${props => (props.isOpen ? 'flex' : 'none')}; // Hide by default
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background-color: #fff;
      padding: 20px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
      z-index: 9;
    }
  }

  li {
    a {
      font-family: 'NeueRegular', sans-serif;
      font-weight: normal;
      text-decoration: none;
      color: #7a7a7a;
      font-size: 1rem;

      &:hover {
        transform: scale(1.05);
        color: #ff5600;
      }

      &.active {
        color: #ff5600;
      }
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  margin-left : 120px;

  @media (max-width: 480px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Container>
        <Paragraph>
          <Description>Randel Joshua Tan</Description> <Icon>PH</Icon>
        </Paragraph>

        <HamburgerIcon onClick={toggleMenu}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />} {/* Toggle between menu and close icons */}
        </HamburgerIcon>

        <Nav isOpen={isOpen}>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/works" activeClassName="active" onClick={toggleMenu}>
                Works
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" activeClassName="active" onClick={toggleMenu}>
                Expertise
              </NavLink>
            </li>
            <li>
              <NavLink to="/tools" activeClassName="active" onClick={toggleMenu}>
                Tools
              </NavLink>
            </li>
          </ul>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default transition(Header);
