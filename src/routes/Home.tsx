import { QueryClient } from "@tanstack/react-query";
import { Form } from "../components/Form";
import { MainContainer } from "../styles/HomeStyles";
import { GetAllCurrenciesResponse } from "../controllers/CurrenciesControllers";
import { getAllCurrenciesQuery } from "../hooks/useGetAllCurrencies";

export const homeLoader = (queryClient: QueryClient) => async () => {
  return (
    queryClient.getQueriesData<GetAllCurrenciesResponse>({
      ...getAllCurrenciesQuery(),
    }) ?? (await queryClient.fetchQuery({ ...getAllCurrenciesQuery() }))
  );
};

const Home = () => {
  return (
    <MainContainer>
      <h1>Convert currencies</h1>
      <Form />
    </MainContainer>
  );
};

export default Home;
