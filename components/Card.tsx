import React from 'react'
import styled from 'styled-components'

interface CardProps {
  imageSrc: string
  title: string
  species: string
  onClick?: () => void
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
  &:hover {
    filter: contrast(1.1);
    transform: scale(1.05);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }
`

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 4px;
`

const CardTitle = styled.h3`
  font-family: 'Raleway', sans-serif;
  margin-top: 8px;
  font-size: 18px;
  color: rgb(248 250 252);
`

const CardText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  margin-top: 4px;
  color: rgb(241 245 249);
`

const Card: React.FC<CardProps> = ({ imageSrc, title, species, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImage src={imageSrc} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardText>{species}</CardText>
    </CardContainer>
  )
}

export default Card
