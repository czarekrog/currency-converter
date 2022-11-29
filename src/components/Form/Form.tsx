import { useConvertCurrencies } from "../../hooks/useConvertCurrencies";
import { useGetAllCurrencies } from "../../hooks/useGetAllCurrencies";
import {
  StyledArrowSpan,
  StyledButton,
  StyledErrorsContainer,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledSelectSectionDiv,
} from "./FormStyles";

export const Form = () => {
  const {
    form: {
      register,
      handleConvert,
      formState: { errors },
    },
  } = useConvertCurrencies();
  const { symbols } = useGetAllCurrencies();

  return (
    <>
      <StyledForm onSubmit={handleConvert}>
        <StyledInput {...register("amount")} placeholder="Enter amount..." />
        <StyledSelectSectionDiv>
          <StyledSelect {...register("convertFrom")}>
            {symbols?.map((symbol) => (
              <option key={symbol.code} value={symbol.code}>
                {symbol.code}
              </option>
            ))}
          </StyledSelect>
          <StyledArrowSpan>&rarr;</StyledArrowSpan>
          <StyledSelect {...register("convertTo")}>
            {symbols?.map((symbol) => (
              <option key={symbol.code} value={symbol.code}>
                {symbol.code}
              </option>
            ))}
          </StyledSelect>
        </StyledSelectSectionDiv>
        <StyledButton>Convert</StyledButton>
      </StyledForm>
      <StyledErrorsContainer>
        {errors.amount?.message && <p>{errors.amount?.message as String}</p>}
      </StyledErrorsContainer>
    </>
  );
};
