import React from "react";
import styled from "styled-components";

interface CardProps {
  imageSrc: string;
  title: string;
  onClick?: () => void;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra horizontalmente */
  justify-content: center; /* Centra verticalmente */
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer; // Cambia el cursor al pasar por encima del componente
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 4px;
`;

const CardTitle = styled.h3`
  font-family: "Raleway", sans-serif;
  margin-top: 8px;
  font-size: 18px;
`;

const Card: React.FC<CardProps> = ({ imageSrc, title, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImage src={imageSrc} alt={title} />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default Card;
