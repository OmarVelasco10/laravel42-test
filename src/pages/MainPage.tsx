import React from "react";

import { Actions } from "../components/Actions";
import prices from "../api/prices.json";
import { Form } from "../components/Form";

export const MainPage = () => {
  return (
    <div className="md:container mx-auto text-center px-6 sm:px-10 md:px-6">
      <div className="bg-white h-4/5 rounded-3xl shadow-2xl px-4 max-w-4xl lg:max-w-7xl xl:max-w-7xl flex flex-col items-center md:h-1/2">
        <p className="text-xl text-gray-5 font-semibold pt-4 sm:pt-10 pb-2 mb-4 px-4 text-2xl sm:px-8 lg:text-3xl">
          Il credito
          <br className="sm:hidden" />
          per i tuoi progetti
        </p>
        <Form prices={prices.prices} />
        <h2 className="mt-6 sm:mt-8 text-lg xs:text-xl text-gray-5 font-light">
          Ti bastano <strong className="font-bold">3 minuti,</strong> ovunque tu
          sia
        </h2>
        <Actions />
      </div>
    </div>
  );
};
