import React from "react";
import ExpandSvg from "../../svgs/Expand";
import TimeTableForm from "./components/TimeTableForm";
import ColapseMenu from "../../components/ColapseMenu";

export default function Config() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-10   sm:ml-52 lg:flex-row">
      <div className="w-[400px] rounded-md bg-white px-6 py-12 shadow-lg shadow-slate-400">
        {/* deco vrea sa am am 3 sectiuni ? 
          fiecare sectiune ar trbui sa fie de tip colapse 
        */}
        <ColapseMenu title="Test1" isExpanded={true}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad
          provident optio necessitatibus odio maiores, velit doloribus nihil
          corporis! Dolor eius ipsa modi quam reprehenderit quas unde totam id
          possimus.
        </ColapseMenu>
        <ColapseMenu title="Test1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad
          provident optio necessitatibus odio maiores, velit doloribus nihil
          corporis! Dolor eius ipsa modi quam reprehenderit quas unde totam id
          possimus.
        </ColapseMenu>
        <ColapseMenu title="Test1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad
          provident optio necessitatibus odio maiores, velit doloribus nihil
          corporis! Dolor eius ipsa modi quam reprehenderit quas unde totam id
          possimus.
        </ColapseMenu>
      </div>
    </main>
  );
}
