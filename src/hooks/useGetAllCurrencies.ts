import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { CurrenciesController } from "../controllers/CurrenciesControllers";

export const getAllCurrenciesQuery = () => ({
  queryKey: ["rates"],
  queryFn: async () => await CurrenciesController.getAllCurrencies(),
});

export const useGetAllCurrencies = () => {
  const { data, ...restQuery } = useQuery({ ...getAllCurrenciesQuery() });

  //Transforming data.rates {AED: 3.55, AFN: 84.72} to ['AED', 'AFN] to get symbols available for convertion to later maps it for select fields
  const symbols = useMemo(
    () => data?.symbols && Object.values(data?.symbols).map((value) => value),
    [data?.symbols]
  );
  return { symbols, ...restQuery };
};
