import { useState, useEffect, useCallback } from "react";
import {
  useQueryClient,
  QueryFilters,
  useIsRestoring,
} from "@tanstack/react-query";
import { ConvertCurrencyResponse } from "../controllers/CurrenciesControllers";
import { v4 } from "uuid";
import { CONVERSION } from "../types/QueryKeys";
import { useNavigate } from "react-router-dom";
type ConvertCurrencyResponseWithId = ConvertCurrencyResponse & { id: string };

export const useConvertHistory = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [history, setHistory] = useState<ConvertCurrencyResponseWithId[]>([]);
  const isRestoring = useIsRestoring();

  useEffect(() => {
    const queries = queryClient.getQueriesData<ConvertCurrencyResponse>({
      queryKey: [CONVERSION],
      predicate: (query) => Boolean(query.state.data),
    } as QueryFilters);
    const data = queries.map((tab) => ({
      ...tab[1],
      id: v4(),
    })) as ConvertCurrencyResponseWithId[];
    setHistory(data.reverse());
  }, [queryClient, isRestoring]);

  const clearHistory = useCallback(() => {
    queryClient.removeQueries({ queryKey: [CONVERSION] });
    navigate("/");
  }, [queryClient, navigate]);

  return { history, clearHistory };
};
