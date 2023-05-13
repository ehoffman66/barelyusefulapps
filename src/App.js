import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Header from './components/Header';
import AppCard from './components/AppCard';
import Section from './components/Section';

import App1Image from './assets/app1.png';
import App2Image from './assets/app2.png';
import AboutImg from './assets/about.jpeg';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 32px;
`;

const IconLink = styled.a`
  margin: 0 15px;
  color: #030e12;
  font-size: 48px;

  &:hover {
    color: #7fe7dc;
  }
`;

const ContactContent = styled.div`
  text-align: center;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImage = styled.img`
  width: 50%;
  border-radius: 15px;  // Rounded corners
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);  // A slight shadow
  transition: transform 0.3s ease-in-out;  // Transition for hover effect

  &:hover {
    transform: scale(1.05);  // Zoom in effect on hover
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;  // Extra margin at the bottom on small screens
  }
`;


const AboutText = styled.p`
  width: 50%;
  color: #030e12;
  font-size: 24px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const apps = [
  {
    title: 'NBA Over/Under Tracker',
    description: 'Track live NBA scores and get over/under for each ',
    url: 'https://github.com/ehoffman66/nba-over-under-tracker',
    img: App1Image
  },
  {
    title: 'Charm City Stickers',
    description: 'Sticker Company to showcase the best of Baltimore',
    url: 'https://www.etsy.com/shop/CharmCityStickers',
    img: App2Image
  },
];

const App = () => (
  <>
    <Header />
    <Section
      id="about"
      title="About"
      content={
        <AboutContent>
          <AboutImage src={AboutImg} alt="About" />
          <AboutText>
            Here is some information about me...
          </AboutText>
        </AboutContent>
      }
      bgColor="#7fe7dc"
      titleColor="#030e12"
      contentColor="#030e12"
    />
    <Section
      id="projects"
      title="Projects"
      content={
        <Container>
          {apps.map((app, index) => (
            <AppCard
              key={index}
              title={app.title}
              description={app.description}
              url={app.url}
              image={app.img}
            />
          ))}
        </Container>
      }
      bgColor="#fcde67"
      titleColor="#030e12"
      contentColor="#030e12"
    />
    <Section
      id="contact"
      title="Contact"
      content={
        <ContactContent>
          <IconLink href="https://github.com/ehoffman66" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </IconLink>
          <IconLink href="mailto:erik.m.hoffman@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </IconLink>
        </ContactContent>
      }
      bgColor="#5bccf6"
      titleColor="#030e12"
      contentColor="#030e12"
    />
  </>
);

export default App;

