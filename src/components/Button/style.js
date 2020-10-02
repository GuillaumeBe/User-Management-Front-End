import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.8rem 0;
  width: 8rem;
  border: 1px solid ${(props) => props.theme.primaryColor};
  outline: none;

  ${({ disabled, isSecondary }) => {
    if (disabled) {
      return css`
        background-color: ${(props) => props.theme.disabledColor};
        cursor: auto;
      `;
    }
    if (isSecondary) {
      return css`
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme.primaryColor};
      `;
    } else {
      return css`
        background-color: ${(props) => props.theme.primaryColor};

        &:hover {
          background-color: ${(props) => props.theme.lightPrimaryColor};
          border: 1px solid ${(props) => props.theme.lightPrimaryColor};
        }
      `;
    }
  }}
`;
