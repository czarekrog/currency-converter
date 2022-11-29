import styled from "@emotion/styled";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  margin: 16x;
  font-size: 24px;
  padding: 8px;
`;

export const StyledSelectSectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const StyledSelect = styled.select`
  font-size: 24px;
  padding: 8px;
`;

export const StyledArrowSpan = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

export const StyledButton = styled.button`
  margin: 16px;
  font-size: 24px;
  padding: 10px 24px;
  border: none;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f2f2f2;
  &:hover {
    background-color: #dbdbdb;
  }
`;

export const StyledErrorsContainer = styled.div`
  color: red;
  font-size: 16px;
  font-weight: 500;
`;
