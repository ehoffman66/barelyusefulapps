import React from 'react';
import styled from '@emotion/styled';

const StyledSection = styled.section`
  background-color: ${props => props.bgColor};
  color: ${props => props.contentColor};
  padding: 32px;
`;

// Increase the font size here
const Title = styled.h1`
  color: ${props => props.color};
  font-size: 48px; // Increase the font size as needed
  text-align: center;
  margin-bottom: 32px;
`;

const Content = styled.div`
  max-width: 960px;
  margin: auto;
`;

const Section = ({ id, title, content, bgColor, titleColor, contentColor }) => (
  <StyledSection id={id} bgColor={bgColor} contentColor={contentColor}>
    <Title color={titleColor}>{title}</Title>
    <Content>{content}</Content>
  </StyledSection>
);

export default Section;
