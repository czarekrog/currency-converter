import styled from "@emotion/styled";

export const StyledMainContainer = styled.div`
  box-sizing: border-box;
  width: 800px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
`;

export const StyledButton = styled.button`
  margin-top: 16px;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f2f2f2;
  &:hover {
    background-color: #dbdbdb;
  }
`;
