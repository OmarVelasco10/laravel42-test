import React from "react";
import { Link, useParams } from "react-router-dom";
import prices from "../api/prices.json";

export const Cotization = () => {
  const { priceSend } = useParams();
  console.log(priceSend);
  let cotizations: any = [];

  if (priceSend) {
    console.log("price", parseInt(priceSend));
    cotizations = prices.prices.filter(
      (price) => price.imp_finanz === parseInt(priceSend)
    );
    cotizations.reverse();
  }

  console.log("result", cotizations);

  return (
    <div className="w-full bg-dark ">
      <div className="border-2 border-yellow-500 rounded-full flex items-center justify-between">
        <div className="bg-yellow-500 w-1/3 p-4 rounded-l-full flex justify-between">
          <p className="font-bold text-xl">{priceSend} €</p>
          <Link className="text-xl" to="/">
            Secci
          </Link>
        </div>
        <div>
          <p className="text-lg">
            <span className="font-bold">{cotizations[0].imp_rata} € </span>
            per
            <span className="font-bold"> {cotizations[0].rate} </span>
            mesi
            <span className="font-bold"> TAEG {cotizations[0].taeg}</span>
          </p>
        </div>
        <button className="bg-yellow-500 p-2 px-16 rounded-full text-lg font-bold sm:mt-0.5 sm:mr-0.5 shadow-xl lg:shadow-none hover:bg-yellow-400 xl:h-14">
          Continua
        </button>
      </div>
      <p className="my-8">Altre proposte di prestito personale</p>
      <div className="flex flex-col gap-4">
        {cotizations.map(
          (item: any, index: any) =>
            index !== 0 && (
              <div className="border-2 border-black rounded-full flex items-center justify-between">
                <div className="w-1/3 p-4 border-r-2 border-black-500 rounded-l-full flex justify-between items-center">
                  <strong className="xl:ml-10 0  whitespace-no-wrap text-xl">{priceSend} €</strong>
                  <Link className="text-xl" to="/">
                    Secci
                  </Link>
                </div>
                <div>
                  <p className="text-lg">
                    <span className="font-bold">{item.imp_rata} € </span>
                    per
                    <span className="font-bold"> {item.rate} </span>
                    mesi
                    <span className="font-bold"> TAEG {item.taeg}</span>
                  </p>
                </div>
                <button className="bg-yellow-500 p-2 px-16 rounded-full text-lg font-bold sm:mt-0.5 sm:mr-0.5 shadow-xl lg:shadow-none hover:bg-yellow-400 xl:h-14">
                  Continua
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
};
