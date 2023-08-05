import { FC } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  onClick: () => void
}

const Text = styled.span`
  line-height: 50px;
  transition: all 200ms;
  &:hover {
    transform: scale(0.9);
    opacity: 0.75;
  }
`

const Button = styled.button`
  align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: 'Codec cold', sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  letter-spacing: 0.4px;
  line-height: 1;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:active {
    outline: 0;
  }

  &:hover {
    outline: 0;
  }
`

export const BackButton: FC<ButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Text>Volver</Text>
    </Button>
  )
}
