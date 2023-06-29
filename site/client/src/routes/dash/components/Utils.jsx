import React from "react";
import PlaySvg from "../../../svgs/Play";
import DownloadSvg from "../../../svgs/Donload";
import FilterSvg from "../../../svgs/Filter";

// vor fi butoanele pt playMusic start ml start download
export default function Utils() {
  return (
    <main className="flex flex-col justify-evenly px-4 py-8 md:flex-row">
      <div className="my-1 flex cursor-pointer rounded border border-blue-500 bg-transparent fill-blue-700 px-2 py-1 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:fill-white hover:text-white">
        <PlaySvg className="h-auto w-[32px]" />
        <button>Play</button>
      </div>
      <div className="my-1 flex cursor-pointer rounded border border-blue-500 bg-transparent fill-blue-500 px-2 py-1 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:fill-white hover:text-white">
        <DownloadSvg className="h-auto w-[32px] " />
        <button>Descarca</button>
      </div>
      <div className="my-1 flex cursor-pointer rounded bg-blue-500 fill-white px-2 py-1 font-bold text-white hover:bg-blue-500/80">
        <FilterSvg className="h-auto w-[32px]" />
        <button>Filtreaza melodiile trimise</button>
      </div>
    </main>
  );
}
