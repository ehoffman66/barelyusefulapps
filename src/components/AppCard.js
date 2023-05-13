import React from 'react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #5bccf6; // Updated background color
  border-radius: 20px;
  padding: 16px;
  width: 300px;
  margin: 16px;
  box-shadow: 0px 10px 20px rgba(3, 14, 18, 0.19), 0px 6px 6px rgba(3, 14, 18, 0.23);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 15px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  color: #030e12; // Updated title color
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  color: #030e12; // Updated description color
  text-align: center;
`;

const CardLink = styled.a`
  color: #fcde67; // Updated link color
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 22px;

  &:hover {
    text-decoration: none;
    color: #7fe7dc;
  }
`;

const AppCard = ({ title, description, url, image }) => (
  <CardContainer>
    <CardImageContainer>
      <CardImage src={image} alt={title} />
    </CardImageContainer>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
    <CardLink href={url} target="_blank" rel="noopener noreferrer">
      Go to Project
    </CardLink>
  </CardContainer>
);

export default AppCard;