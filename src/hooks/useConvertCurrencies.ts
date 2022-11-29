import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { CurrenciesController } from "../controllers/CurrenciesControllers";

const FormSchema = z.object({
  amount: z
    .string()
    .min(1, "Amount input field cannot be empty...")
    .regex(
      new RegExp("^[0-9]*\\.?[0-9]?[0-9]?$"),
      'Amount should be a number and use "." (dot) as a separator, i.e. 19.99'
    ),
  convertFrom: z.string(),
  convertTo: z.string(),
});

type FormDataType = z.infer<typeof FormSchema>;

export const useConvertCurrencies = () => {
  const navigate = useNavigate();
  const { watch, handleSubmit, getValues, ...restForm } = useForm<FormDataType>(
    {
      resolver: zodResolver(FormSchema),
    }
  );
  const { amount, convertFrom, convertTo } = watch();
  const { refetch, ...restQuery } = useQuery(
    ["conversion", amount, convertFrom, convertTo],
    async () =>
      await CurrenciesController.convertCurrency({
        amount,
        from: convertFrom,
        to: convertTo,
      }),
    {
      enabled: false,
      onError: () => {},
      onSuccess: () => {
        navigate(`/results`);
      },
    }
  );

  const onSubmit = useCallback(() => {
    refetch();
  }, [refetch]);

  return {
    form: {
      handleConvert: handleSubmit(onSubmit),
      ...restForm,
    },
    query: {
      ...restQuery,
    },
  };
};
