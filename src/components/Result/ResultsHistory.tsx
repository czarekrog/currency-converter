import { ResultsHistoryElement } from "./ResultsHistoryElement";
import { StyledButton, StyledMainContainer } from "./ResultsHistoryStyles";
import { useConvertHistory } from "../../hooks/useConvertHistory";

export type ResultDataType = {
  id: string;
  from: string;
  to: string;
  amount: number;
  result: number;
  date: string;
};

export const ResultsHistory = () => {
  const { history, clearHistory } = useConvertHistory();

  if (!history.length)
    return (
      <StyledMainContainer>
        <h2>No past results to display...</h2>
      </StyledMainContainer>
    );

  return (
    <StyledMainContainer>
      <h2>Conversions history</h2>
      {history?.map((result) => (
        <ResultsHistoryElement
          key={result.id}
          id={result.id}
          from={result.query.from}
          to={result.query.to}
          amount={result.query.amount}
          result={result.result}
          date={result.date}
        />
      ))}
      <StyledButton onClick={clearHistory}>clear history</StyledButton>
    </StyledMainContainer>
  );
};
