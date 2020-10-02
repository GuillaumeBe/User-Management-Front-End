import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 2rem;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;
