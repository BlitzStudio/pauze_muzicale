import React from "react";

export default function SongForm() {
  function handelSubmit(e) {
    const form = document.querySelector("form");

    console.log(e.target.childNodes);
    e.preventDefault();
  }
  return (
    <main className="flex h-screen items-center  justify-center sm:ml-48">
      <form
        onSubmit={handelSubmit}
        className="flex w-[400px] flex-col rounded-md bg-white px-6 py-12 shadow-lg shadow-slate-400 dark:bg-oxfordBlue dark:text-white dark:shadow-[#002D5D]"
      >
        <h1 className="text-2xl font-bold ">Adauga melodii noi</h1>
        <input type="text" name="song" id="" placeholder="YouTube link" />
        <input type="text" name="song" id="" placeholder="YouTube link" />
        <input type="text" name="song" id="" placeholder="YouTube link" />
        <button
          className="ml-auto mt-2 rounded-md !bg-yaleBlue px-2 py-1 text-white  hover:!bg-yaleBlue/80 focus:ring-2 focus:!ring-mikadoYellow"
          type="submit"
        >
          Send songs
        </button>
      </form>
    </main>
  );
}
