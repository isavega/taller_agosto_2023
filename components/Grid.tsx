import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

type GridProps = {
  children: React.ReactNode;
};

const Grid: React.FC<GridProps> = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export default Grid;
