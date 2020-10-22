import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  place-items: center;
  min-height: 100%;
  gap: 2rem;
  padding:2rem;
  box-sizing: border-box;
`;

export const Card = styled.div`
  display: grid;
  place-items: center;
  width: 18rem;
  height: 18rem;
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: ${(props) => props.theme.borderRadius};
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  font-weight: bold;

  :hover {
    transform:translateY(-1rem);
  }
`;
