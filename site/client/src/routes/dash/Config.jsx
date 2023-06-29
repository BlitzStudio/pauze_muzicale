import React from "react";
import ExpandSvg from "../../svgs/Expand";
import TimeTableForm from "./components/TimeTableForm";
import ColapseMenu from "../../components/ColapseMenu";
import Utils from "./components/Utils";

export default function Config() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 py-4  sm:ml-52 lg:flex-row">
      <div className=" rounded-md bg-white px-1 py-2 shadow-lg shadow-slate-400 md:w-[500px]">
        {/* deco vrea sa am am 3 sectiuni ? 
          fiecare sectiune ar trbui sa fie de tip colapse 
        */}
        <ColapseMenu title="Orar" isExpanded={true}>
          <TimeTableForm />
        </ColapseMenu>
        <ColapseMenu title="Utilitati">
          <Utils />
        </ColapseMenu>
        <ColapseMenu title="Configurari globale"></ColapseMenu>
      </div>
    </main>
  );
}
