import React from "react";
import { Actions } from "../components/Actions";
import prices from "../api/prices.json";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
    price: string;
}

export const MainPage = () => {

    const navigate = useNavigate();

    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        navigate(`/price/${data.price}`);
    };
  return (
    <div className="bg-white h-4/5 rounded-3xl shadow-2xl px-4 max-w-4xl lg:max-w-7xl xl:max-w-7xl flex flex-col items-center md:h-1/2">
      <p className="text-xl text-gray-5 font-semibold pt-4 sm:pt-10 pb-2 mb-4 px-4 text-2xl sm:px-8 lg:text-3xl">
        Il credito
        <br className="sm:hidden" />
        per i tuoi progetti
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 rounded-lg p-2 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <div>
            <select className="w-full rounded-2xl p-4 border-2 border-black" {...register('price')}>
              {prices.prices.map((item: any, index) => (
                <>
                  <option key={`prices-${index}`} value={item.imp_finanz}>
                    € {item.imp_finanz} {item.notes}
                  </option>
                </>
              ))}
            </select>
          </div>

          <button type="submit" className=" max-w-[80%] bg-yellow-500 font-bold rounded-2xl p-4 mt-8">
            <span className="block font-bold text-xl leading-5">CONTINUA</span>
            <span className="block leading-5 text-base">ESITO IMMEDIATO</span>
          </button>
        </div>
      </form>
      <h2 className="mt-6 sm:mt-8 text-lg xs:text-xl text-gray-5 font-light">
        Ti bastano <strong className="font-bold">3 minuti,</strong> ovunque tu sia
      </h2>
      <Actions />
    </div>
  );
};
