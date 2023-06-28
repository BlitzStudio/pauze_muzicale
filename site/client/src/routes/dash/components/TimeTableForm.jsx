import React from "react";

export default function TimeTableForm() {
  function handelSubmit(e) {
    const form = document.querySelector("form");

    console.log(e.target.childNodes);
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handelSubmit}
      className=" flex w-[400px] flex-col rounded-md bg-white px-6 py-12 shadow-lg shadow-slate-400"
    >
      <h1 className="text-2xl font-bold ">Adauga melodii noi</h1>
      <input type="text" name="song" id="" placeholder="youtube links" />
      <input type="text" name="song" id="" placeholder="youtube links" />
      <input type="text" name="song" id="" placeholder="youtube links" />
      <button
        className="ml-auto mt-2 rounded-md !bg-yaleBlue px-2 py-1 text-white  hover:!bg-yaleBlue/80 focus:ring-2 focus:!ring-mikadoYellow"
        type="submit"
      >
        Send songs
      </button>
    </form>
  );
}
