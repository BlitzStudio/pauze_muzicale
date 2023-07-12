import React from "react";
import WarningSvg from "../svgs/Warning";

export default function ValidatedInput({
  isValid,
  handelChange,
  value,
  warningIcon,
  validIcon,
  index,
}) {
  const key = index;
  return (
    <div className="my-2 flex h-max w-full rounded-sm border-2 border-solid  bg-white pl-1 dark:text-black  ">
      {isValid ? validIcon : warningIcon}

      <input
        type="text"
        value={value}
        key={key}
        onChange={(e) => {
          handelChange(e, key);
        }}
        className="m-0 w-full rounded-none border-none  "
      />
    </div>
  );
}
