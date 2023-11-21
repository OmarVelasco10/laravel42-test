import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Price } from "../interfaces/Prices";

interface FormProps {
  prices: Price[];
}

type Inputs = {
  price: string;
};

export const Form = ({ prices }: FormProps) => {
  const navigate = useNavigate();

  const uniqueImpFinanzSet = new Set();
  const uniquePrices: any = [];

  prices.forEach((price) => {
    if (!uniqueImpFinanzSet.has(price.imp_finanz)) {
      uniqueImpFinanzSet.add(price.imp_finanz);
      uniquePrices.push({ imp_finanz: price.imp_finanz, notes: price.notes });
    }
  });
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    navigate(`/price/${data.price}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:max-w-md rounded-lg p-2 flex flex-col items-center justify-center"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <div className="md:w-full mx-auto">
          <select
            className="home-select w-full rounded-2xl p-4 border-2 border-black"
            {...register("price")}
          >
            {uniquePrices.map((item: any, index: any) => (
              <option key={`price-${index}`} value={item.imp_finanz}>
                € {item.imp_finanz} {item.notes}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="home-submit w-full md:max-w-[70%] font-bold py-2"
        >
          <span className="block font-bold text-xl leading-500">CONTINUA</span>
          <span className="inline-block leading-5 text-base">
            ESITO IMMEDIATO
          </span>
        </button>
      </div>
    </form>
  );
};
