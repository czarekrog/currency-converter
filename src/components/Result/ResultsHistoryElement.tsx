import moment from "moment";
import { ResultDataType } from "./ResultsHistory";
import { StyledResultParagraph } from "./ResultsHistoryElementStyles";

export const ResultsHistoryElement = (result: ResultDataType) => {
  return (
    <StyledResultParagraph>
      <b>{moment(result.date).format("DD.MM.YYYY")} - </b>{" "}
      {result.amount.toFixed(2)} {result.from} = {result.result.toFixed(2)}
      {result.to}
    </StyledResultParagraph>
  );
};
