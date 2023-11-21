import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Price } from '../interfaces/Prices';
import { v4 as uuidv4 } from "uuid";

interface FormProps {
  prices: Price[];
}

type Inputs = {
  price: string;
}

export const Form = ({prices}: FormProps) => {
  const navigate = useNavigate();

  const uniqueImpFinanzSet = new Set();
  const uniquePrices: any = [];
  
  prices.forEach((price) => {
    if (!uniqueImpFinanzSet.has(price.imp_finanz)) {
      uniqueImpFinanzSet.add(price.imp_finanz);
      uniquePrices.push({ imp_finanz: price.imp_finanz, notes: price.notes });
    }
  });
  const {register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
      navigate(`/price/${data.price}`);
  };


  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 rounded-lg p-2 flex flex-col items-center justify-center">
    <div className="w-full flex flex-col justify-center items-center">
      <div>
        <select className="w-full rounded-2xl p-4 border-2 border-black" {...register('price')}>
          {uniquePrices.map((item: any, index: any) => (
            <>
              <option key={`price-${uuidv4()}`} value={item.imp_finanz}>
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
  )
}
