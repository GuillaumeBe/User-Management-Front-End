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

  @media (max-width: 700px){
    display: none;
  }

`;

export const TBody = styled.tbody``;

export const TR = styled.tr`

@media (max-width: 700px){
  display: block;
  margin-bottom: 2rem;
}

  ${({ isClickable }) =>
    isClickable &&
    css`
      cursor: pointer;
    `}
`;

export const TH = styled.th`
  padding: 1.2rem 1rem;
  text-align: left;

  @media (max-width: 700px){
    display: block;
    margin-bottom: 4rem;
  }
`;

export const TD = styled.td`
  vertical-align: middle;

  @media (min-width: 700px){
    height: 3rem;
    padding: 0.5rem 1rem;

  }

  @media (max-width: 700px){
    display: block;
    text-align: right;
    padding: 0.5rem 0rem;

    :before {
      float: left;
      font-weight: bold;
      }

      :nth-of-type(1):before { content: "Prénom"; }
	    :nth-of-type(2):before { content: "Nom"; }
	    :nth-of-type(3):before { content: "Email"; }
	    :nth-of-type(4):before { content: "Rôle"; }
  }

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
  gap: 2rem;
  flex-wrap:wrap;
`;
