import React from "react";
import { Link, useParams } from "react-router-dom";
import prices from "../api/prices.json";
import { IoIosArrowDown } from "react-icons/io";

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
    <div className="w-full bg-dark lg:container px-2 sm:px-16 sm:px-4 mx-auto pt-6 md:max-w-[90%]">
      <div className="border-2 border-yellow-500 w-[85%] flex-col rounded-full flex items-center justify-between lg:flex-no-wrap lg:rounded-full lg:overflow-hidden lg:max-w-[80%] xl:max-w-[90%] lg:flex-col xl:flex-row lg:items-baseline">
        <div className="flex lg:w-2/3 flex-col w-full lg:flex-row relative lg:static">
          <div className="bg-yellow-500 w-full rounded-t-full lg:w-[40%] lg:rounded-t-lg xl:rounded-t-none lg:rounded-l-full lg:rounded-bl-none lg:rounded-tr-none xl:rounded-l-none xl:rounded-r-none w-1/3 p-4 rounded-tl-full flex justify-between">
            <p className="font-bold text-xl">{priceSend} €</p>
            <Link className="text-xl" to="/">
              Secci
            </Link>
          </div>
          <div className="lg:w-2/3 w-full flex mt-0 items-center justify-center p-2 mb-8">
            <p className="text-lg">
              <span className="font-bold">{cotizations[0].imp_rata} € </span>
              per
              <span className="font-bold"> {cotizations[0].rate} </span>
              mesi
              <span className="font-bold"> TAEG {cotizations[0].taeg}</span>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-auto lg:ml-auto lg:text-right absolute lg:static top-[52%] left-[20%] md:top-[52%] md:left-[30%]">
          <button className="bg-yellow-500 p-2 px-16 rounded-full text-lg font-bold sm:mt-0.5 sm:mr-0.5 shadow-xl lg:shadow-none hover:bg-yellow-400 xl:h-16">
            Continua
          </button>
        </div>
      </div>
      <p className="my-8 text-center lg:text-start">Altre proposte di prestito personale</p>
      <div className="flex flex-col gap-4 w-[85%] lg:max-w-[80%] xl:max-w-[90%]">
        {cotizations.map(
          (item: any, index: any) =>
            index !== 0 && (
              <div className="border-2 border-black rounded-full flex items-center justify-between ">
                <div className="w-auto lg:w-1/3 p-4 border-r-2 border-black-500 rounded-l-full flex justify-between items-center">
                  <strong className="xl:ml-10 0  whitespace-no-wrap text-xl">
                    {priceSend} €
                  </strong>
                  <Link className="text-xl hidden lg:block" to="/">
                    Secci
                  </Link>
                </div>
                <div>
                  <p className="text-lg">
                    rata
                    <span className="font-bold"> {item.imp_rata} € </span>
                    per
                    <span className="font-bold"> {item.rate} </span>
                    mesi
                    <span className="font-bold"> TAEG {item.taeg}</span>
                  </p>
                </div>
                <div>
                  <button className="bg-yellow-500 hidden lg:block p-2 px-16 rounded-full text-lg font-bold sm:mt-0.5 sm:mr-0.5 shadow-xl lg:shadow-none hover:bg-yellow-400 lg:h-14">
                    Continua
                  </button>
                  <IoIosArrowDown className=" lg:hidden"/>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
