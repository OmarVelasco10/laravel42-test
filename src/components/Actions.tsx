import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { SiZeromq } from "react-icons/si";

export const Actions = () => {
  return (
    <div className="w-3/4 flex justify-between ">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-yellow-500 p-2">
          <AiOutlineThunderbolt />
        </div>
        Prevalutazione immediata
      </div>
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-yellow-500 p-2">
          <HiOutlineDesktopComputer />
        </div>
        Tutto online
      </div>
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-yellow-500 p-2">
          <HiOutlineDocumentChartBar />
        </div>
        Rata fissa
      </div>
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-yellow-500 p-2">
          <SiZeromq />
        </div>
        Zero spese
      </div>
    </div>
  );
};
