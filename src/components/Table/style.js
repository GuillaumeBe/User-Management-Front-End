import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 2rem;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const THead = styled.thead`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
`;

export const TBody = styled.tbody``;

export const TR = styled.tr`
  ${({ isClickable }) =>
    isClickable &&
    css`
      cursor: pointer;
    `}
`;

export const TH = styled.th`
  padding: 1.2rem 1rem;
  text-align: left;
`;

export const TD = styled.td`
  padding: 0.5rem 1rem;
  vertical-align: middle;
  height: 3rem;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  height: 2.2rem;
  width: 2.2rem;
  background-color: ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
`;
