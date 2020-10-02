import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  place-items: center;
  height: 100%;
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
    margin-bottom: 2rem;
  }
`;
