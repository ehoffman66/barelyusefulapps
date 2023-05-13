import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link, Events } from 'react-scroll';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 32px;
  background-color: #316879;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 16px;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;

  div {
    width: 35px;
    height: 5px;
    background-color: #fcde67;
    margin: 6px 0;
    transition: 0.4s;

    &:nth-child(1) {
      transform: ${props => (props.open ? 'rotate(-45deg) translate(-9px, 6px)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${props => (props.open ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${props => (props.open ? 'rotate(45deg) translate(-9px, -6px)' : 'rotate(0)')};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Word = styled.span`
  color: #fcde67;
  font-size: 200px;
  font-weight: bold;
  line-height: 1.2;
  transition: opacity 0.3s ease-in-out;
  position: relative;

  @media (max-width: 768px) {
    font-size: 72px;
  }
`;

const BarelyWord = styled(Word)`
  &:hover {
    opacity: 0;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    align-items: center;
    margin-top: 50px; // This line adds a margin-top of 20px in mobile view.
  }
`;

const NavLink = styled(Link)`
  color: ${props => (props.active ? '#7fe7dc' : '#fcde67')};
  font-size: 72px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out, font-size 0.3s ease-in-out; // added font-size to transition

  &:hover {
    color: #7fe7dc;
    font-size: 80px; // adjusted to your desired hover size
  }

  @media (max-width: 768px) {
    font-size: 36px;

    &:hover {
      font-size: 40px; // adjust this to your desired mobile hover size
    }
  }
`;

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
  
    const handleSetActive = to => {
      setActiveSection(to);
    };
  
    useEffect(() => {
      Events.scrollEvent.register('begin', () => {
        // can add actions on scroll start
      });
  
      Events.scrollEvent.register('end', handleSetActive);
  
      return () => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      };
    }, []);
  
    return (
      <StyledHeader>
        <BrandText>
          <BarelyWord> Barely </BarelyWord>
          <Word> Useful </Word>
          <Word> Apps </Word>
        </BrandText>
        <Hamburger open={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
        <NavMenu open={isOpen}>
          <NavLink
            onClick={() => setIsOpen(false)}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            active={activeSection === 'about'}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            active={activeSection === 'projects'}
          >
            Projects
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            active={activeSection === 'contact'}
          >
            Contact
          </NavLink>
        </NavMenu>
      </StyledHeader>
    );
  };
  
  export default Header;
  