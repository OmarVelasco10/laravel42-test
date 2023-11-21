import React from "react";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { SiZeromq } from "react-icons/si";

export const Actions = () => {
  return (
    <div className="grid grid-cols-2 justify-items-center w-[80%] md:w-[70%] lg:flex lg:flex-wrap items-start justify-center lg:max-w-96 py-4 sm:py-4 lg:px-40 lg:w-full">
      <div className="w-1/3 md:w-2/5 lg:w-1/4 flex items-center gap-2 flex flex-col my-4 xl:flex-row xl:justify-center">
        <div className="rounded-full bg-yellow-500 p-2 flex flex-col ">
          <AiOutlineThunderbolt />
        </div>
        <h4 className="block whitespace-normal md:whitespace-nowrap xl:whitespace-nowrap text-sm xl:inline-block lg:inline lg:px-2 lg:whitespace-normal">
          Prevalutazione immediata
        </h4>
      </div>
      <div className="w-1/3 md:w-2/5 lg:w-1/4 flex items-center gap-2 flex flex-col my-4 xl:flex-row xl:justify-center">
        <div className="rounded-full bg-yellow-500 p-2 ">
          <HiOutlineDesktopComputer />
        </div>
        Tutto online
      </div>
      <div className="w-1/3 md:w-2/5 lg:w-1/4 flex items-center gap-2 flex flex-col my-4 xl:flex-row xl:justify-center">
        <div className="rounded-full bg-yellow-500 p-2">
          <HiOutlineDocumentChartBar />
        </div>
        Rata fissa
      </div>
      <div className="w-1/3 md:w-2/5 lg:w-1/4 flex items-center gap-2 flex flex-col my-4 xl:flex-row xl:justify-center">
        <div className="rounded-full bg-yellow-500 p-2">
          <SiZeromq />
        </div>
        Zero spese
      </div>
    </div>
  );
};
