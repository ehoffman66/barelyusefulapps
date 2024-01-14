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
import App3Image from './assets/app3.png';

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
  display: block;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutText = styled.p`
  color: #030e12;
  font-size: 22px; //Reduced size from 24px to 18px
  line-height: 1.6;
  font-family: 'Courier New', Courier, monospace;
  text-shadow: 1px 1px 1px #7fe7dc;
  transition: color 0.5s;

  &:hover {
    color: #316879; // Changes to yellow on hover
  }

  @media (max-width: 768px) {
    font-size: 16px; // Further reduced for smaller screens
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
  {
    title: 'Brutal Tasks',
    description: 'Tracking and completing tasks can be brutal, we make that easier',
    url: 'https://www.brutaltasks.com',
    img: App3Image
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
          <AboutText>
            <p>Welcome to Barely Useful Apps! We're the digital equivalent of that quirky gadget shop down the street that you can't help but love. Sure, you might not <em>need</em> that novelty mug that stirs itself, but isn't life just a bit more fun with it on your desk? That's us, but in app form.</p>

            <p>Barely Useful Apps sprang to life with our first creation: a random restaurant picker designed to solve the age-old question of where to go for lunch on Fridays. What started as a fun project to help indecisive coworkers became the first step in a journey of creating micro apps that might seem barely useful at first glance (hence the name), but quickly become the quirky tools you never knew you needed.</p>

            <p>Our founder, a photography enthusiast with a knack for programming, has a mission to make life a tad easier and a lot more fun with our apps. Each one is born out of real-life situations and individual needs. From a sudden "There should be an app for that!" moment to a late-night brainstorming session, our ideas come from the everyday.</p>

            <p>But Barely Useful Apps is more than just about making fun applications. It’s also about learning and growing. Each app is a new challenge, a new problem to solve, and a new opportunity to learn more about the ever-evolving world of programming.</p>

            <p>So, come join us on this barely useful journey. You'll find it's quite a lot of fun, and who knows, you might even find an app or two that solves those little problems you never knew you had.</p>
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

