import React, { useRef, useState, useEffect } from "react";
import ExpandSvg from "../svgs/Expand";

export default function CollapseMenu({ children, title, isExpanded = false }) {
  const [isCollapsed, CollapseMenu] = useState(false);
  const child = useRef(null);
  const expandSvg = useRef(null);

  useEffect(() => {
    isExpanded != isCollapsed ? CollapseMenu(isExpanded) : "";
  }, []);

  useEffect(() => {
    if (isCollapsed) {
      expandSvg.current.style.transform = "rotate(0deg)";
    } else {
      expandSvg.current.style.transform = "rotate(90deg)";
    }
  }, [isCollapsed]);

  return (
    <div>
      <div
        className="flex items-center justify-between bg-slate-100 p-2 sm:hover:bg-slate-300 "
        onClick={() => {
          CollapseMenu(!isCollapsed);
        }}
      >
        <h2 className=" text-xl font-bold">{title}</h2>
        <ExpandSvg element={expandSvg} className="h-auto w-[32px] rotate-90 " />
      </div>
      <div
        ref={child}
        className={
          (isCollapsed ? "bg-slate-100 px-1" : "hidden bg-slate-100 px-1") + ""
        }
      >
        {children}
      </div>
    </div>
  );
}
