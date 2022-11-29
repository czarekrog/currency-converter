import styled from "@emotion/styled";

export const StyledNavbar = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 24px;
    color: #393939;
  }
  a.active {
    font-weight: 600;
    text-decoration: underline;
  }
`;
