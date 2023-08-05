import React from "react";
import styled from "styled-components";

interface CardProps {
  imageSrc: string;
  title: string;
}

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

const CardTitle = styled.h3`
  margin-top: 8px;
  font-size: 18px;
`;

const Card: React.FC<CardProps> = ({ imageSrc, title }) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt={title} />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default Card;
