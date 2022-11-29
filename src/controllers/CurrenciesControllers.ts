import { apiClient } from "../lib/axios";

interface APIResult {
  motd: {
    msg: string;
    url: string;
  };
  success: boolean;
}

export interface GetAllCurrenciesResponse extends APIResult {
  symbols: Symbols;
}

export type Symbols = Record<string, Description>;

export interface Description {
  description: string;
  code: string;
}
const getAllCurrencies = async () => {
  const res = await apiClient.get<GetAllCurrenciesResponse>(`/symbols`);
  return res.data;
};

type ConvertCurrencyData = {
  from: string;
  to: string;
  amount: string;
};

export interface ConvertCurrencyResponse extends APIResult {
  query: {
    from: string;
    to: string;
    amount: number;
  };
  info: {
    rate: number;
  };
  historical: boolean;
  date: string;
  result: number;
}

const convertCurrency = async ({ from, to, amount }: ConvertCurrencyData) => {
  const res = await apiClient.get<ConvertCurrencyResponse>(`/convert`, {
    params: { from, to, amount },
  });
  return res.data;
};

export const CurrenciesController = {
  convertCurrency,
  getAllCurrencies,
};
