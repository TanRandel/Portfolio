import React from 'react';
import styled from 'styled-components';
import transition from '../transition';

const FooterContainer = styled.footer`
  width: 100%;
  position: relative;
  padding: 20px 0;
`;

const Nav = styled.nav`
  max-width: 750px;
  margin: 0 auto;
`;

const Order = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const ListItem = styled.li`
  margin-right: 4.5rem;

  @media (max-width: 480px) {
    margin-right: 0;
  }
`;

const Link = styled.a`
  font-size: 18px;
  color: #7a7a7a;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.hovercolor};
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const DesignAuthor = styled.address`
  position: absolute;
  bottom: 200%;
  right: -2%;
  font-style: normal;
  font-size: 0.6rem;
  transform: rotate3d(0, 0, 1, 270deg);
  transition: 190ms linear;

  a {
    color: #ff5600;
    text-decoration: none;
  }

  &:hover {
    opacity: 3;
  }


  @media (max-width: 480px) {
    position: static;
    transform: rotate(0deg);
    font-size: 0.7rem;
    text-align: center;
    margin-top: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Nav>
        <Order>
          <ListItem>
            <Link className="in" target="_blank" href="https://www.linkedin.com/in/randel-joshua-tan-200505263/" hovercolor="#0579F0">LinkedIn</Link>
          </ListItem>
          <ListItem>
            <Link className="git" target="_blank" href="https://github.com/TanRandel" hovercolor="rgb(89, 185, 246)">GitHub</Link>
          </ListItem>
          <ListItem>
            <Link className="mail" target="_blank" href="mailto:randeljoshuatan@gmail.com" hovercolor="#F2392C">E-mail</Link>
          </ListItem>
        </Order>
      </Nav>
      <DesignAuthor><a target="_blank" href="https://github.com/TanRandel">Design by Randel Tan</a></DesignAuthor>
    </FooterContainer>
  );
}

export default transition(Footer);
