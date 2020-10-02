import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  margin-bottom: 0.4rem;
`;

export const Input = styled.input`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.lightPrimaryColor};
  padding: 0.6rem;
  box-sizing: border-box;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.primaryColor};
  }
`;

export const Select = styled.select`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.lightPrimaryColor};
  padding: 0.6rem;
  box-sizing: border-box;
  font-size: 0.9rem;
  outline: none;
`;

export const Error = styled.span`
  color: red;
  margin-top: 0.5rem;
`;
