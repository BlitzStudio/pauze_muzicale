import React, { useState, useRef } from "react";
import { useEffect } from "react";

export default function TimeTableForm() {
  const lastInput = useRef();
  const [formInputs, setFormInputs] = useState([
    {
      time: "00:00",
      durata: 10,
    },
  ]);

  function newInputTime() {
    const [H, min] = formInputs[formInputs.length - 1].time
      .split(":")
      .map((item) => parseInt(item));
    const newH = H / 10 > 1 ? H + 1 : `0${H + 1}`;
    const newMin = min / 10 > 1 ? min : `0${min}`;

    return `${newH}:${newMin}`;
  }

  function handelChange(e, index) {
    let data = [...formInputs];

    data[index][e.target.name] = e.target.value;
    setFormInputs(data);
  }

  function addInput() {
    setFormInputs((currentState) => {
      return [
        ...currentState,
        {
          time: newInputTime(),
          durata: 10,
        },
      ];
    });
  }

  function clearForm() {
    setFormInputs([
      {
        time: "01:00",
        durata: 10,
      },
    ]);
  }

  function handelSubmit(e) {
    const form = document.querySelector("form");
    e.preventDefault();
  }
  return (
    <form onSubmit={handelSubmit} className="flex flex-col rounded-md px-4">
      <div className="flex text-center text-lg font-bold text-gray-800">
        <p className="w-[50%]">HH:mm</p>
        <p className="w-[50%]">Durata</p>
      </div>

      {formInputs.map((data, index) => {
        return (
          <div className="flex" key={index}>
            <input
              className="mx-1 w-[50%]"
              type="time"
              name="time"
              id=""
              value={data.time}
              onChange={(e) => handelChange(e, index)}
            />
            <input
              className="mx-1 w-[50%]"
              type="number"
              name="durata"
              id=""
              value={data.durata}
              placeholder="Pauza 1"
              onChange={(e) => handelChange(e, index)}
            />
          </div>
        );
      })}

      <div
        className="my-2 block cursor-pointer rounded-sm border-2 border-solid px-2 py-1 text-center text-gray-700 outline-none outline focus:border-black"
        onClick={addInput}
      >
        Pauza noua
      </div>

      <div className="flex justify-between">
        <button
          className="  mx-1 mt-2 rounded-md border-2 border-solid border-red-600 px-2 py-1 font-semibold  text-red-600    "
          onClick={clearForm}
        >
          Sterge
        </button>
        <div>
          <button className="  mx-1 mt-2 rounded-md border-2 border-solid border-red-600 px-2 py-1 font-semibold text-black focus:ring-2  focus:ring-red-600 ">
            Reseteaza
          </button>
          <button
            className=" mx-1 mt-2 rounded-md !bg-blue-500 px-2 py-1 text-white  hover:!bg-blue-500/80 focus:ring-2 "
            type="submit"
          >
            Trimite
          </button>
        </div>
      </div>
    </form>
  );
}
