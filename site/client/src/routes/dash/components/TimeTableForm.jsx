import React, { useState, useRef } from "react";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";

export default function TimeTableForm() {
  const lastInput = useRef();
  const { user } = useAuth();
  const [formInputs, setFormInputs] = useState([
    {
      time: "01:00",
      durata: 10,
    },
  ]);

  function newInputTime() {
    const [H, min] = formInputs[formInputs.length - 1].time
      .split(":")
      .map((item) => parseInt(item));
    const newH = (H + 1) / 10 >= 1 ? H + 1 : `0${H + 1}`;

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
  function generateTimetable(array) {
    return array.map((element) => {
      const [Sh, Sm] = element.time.split(":");
      let Eh = Sh;
      let Em = parseInt(Sm) + element.durata;
      if (Em >= 60) {
        Eh += 1;
        Em = (Em % 60) / 10 > 1 ? Em % 60 : `0${Em % 60}`;
      }
      return `${Sh}:${Sm}_${Sh}:${Em}`;
    });
  }

  function handelSubmit(e) {
    const timeTable = generateTimetable(formInputs);
    axios
      .post(
        "/admin/time",
        {
          timeTable,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .catch((e) => console.log(e));
    e.preventDefault();
  }
  return (
    <form onSubmit={handelSubmit} className="flex flex-col rounded-md px-4">
      <div className="flex text-center text-lg font-bold text-gray-800 dark:text-gray-200">
        <p className="w-[50%]">HH:mm</p>
        <p className="w-[50%]">Durata</p>
      </div>

      {formInputs.map((data, index) => {
        return (
          <div className="flex" key={index}>
            <input
              className="mx-1 w-[50%] dark:text-black"
              type="time"
              name="time"
              id=""
              value={data.time}
              onChange={(e) => handelChange(e, index)}
            />
            <input
              className="mx-1 w-[50%] dark:text-black"
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
        className="my-2 block cursor-pointer rounded-sm border-2 border-solid px-2 py-1 text-center text-gray-700 outline-none outline focus:border-black dark:text-gray-200"
        onClick={addInput}
      >
        Pauza noua
      </div>

      <div className="flex justify-between">
        <button
          className="  mx-1 mt-2 rounded-md border-2 border-solid border-red-600 px-2 py-1 font-semibold text-red-600 dark:text-white"
          onClick={clearForm}
        >
          Sterge
        </button>
        <div>
          <button className="  mx-1 mt-2 rounded-md border-2 border-solid border-red-600 px-2 py-1 font-semibold text-black focus:ring-2 focus:ring-red-600  dark:text-white ">
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
