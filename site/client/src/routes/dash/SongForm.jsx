import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import Input from "../../components/ValidatedInput";
import WarningSvg from "../../svgs/Warning";
import DoneSvg from "../../svgs/Done";

import linkParser from "../../api/linkParser.js";

export default function SongForm() {
  const { user, setUser, isLoading } = useAuth();

  const [form, setForm] = useState([{ value: "", isValid: false }]);
  const [inputsNr, setInputNr] = useState();
  const [isAllowed, setIsAllowed] = useState(true);

  const refreshDate = new Date(user?.refreshWindow);
  const now = new Date();
  const days = [
    "Luni",
    "Marti",
    "Miercuri",
    "Joi",
    "Vineri",
    "Sambata",
    "Duminica",
  ];

  function handelChange(e, index) {
    const value = e.target.value;
    console.log(value);
    const isValid = linkParser(value);
    console.log(isValid);
    setForm((prevState) => {
      return prevState.map((data, ind) => {
        if (index == ind) {
          data.value = value;
          data.isValid = isValid;
          return data;
        } else {
          return data;
        }
      });
    });
  }

  function newInput(e) {
    e.preventDefault();
    e.stopPropagation();

    setInputNr(inputsNr - 1);
    setForm((prevState) => {
      console.log(prevState);

      return [
        ...prevState,
        {
          value: "",
          isValid: false,
        },
      ];
    });
  }

  function handelSubmit(e, index) {
    e.preventDefault();
    e.stopPropagation();
  }

  useEffect(() => {
    console.log("Rerender");
  }, [form]);

  useEffect(() => {
    //     if (refreshDate.getTime() >= now.getTime() && user?.submittedCount == 3) {
    //in cazul in care utilizatorul nu trebuie sa trmita melodii
    //     } else if (refreshDate.getTime() < now.getTime()) {
    // in cazul in care refreshWindowul nu a fost resetat pe server
    // else
    // pt a afisa inputurile
    const inputs = [];
    if (refreshDate.getTime() >= now.getTime() && user?.submittedCount == 3) {
      setIsAllowed(false);
    } else {
      let i = 0;

      if (refreshDate.getTime() < now.getTime()) {
        i = 0;
      } else {
        i = user?.submittedCount;
      }
      setInputNr(3 - i);

      // for (i; i < 3; i++) {
      //   inputs.push({
      //     value: "",
      //     isValid: false,
      //   });
      // }
      // setForm(() => {
      //   return inputs;
      // });
    }
  }, [user]);

  if (isAllowed) {
    console.log(form);
    return (
      <main className="flex h-screen items-center justify-center p-8 sm:ml-48">
        <form
          // onSubmit={handelSubmit}
          className="flex w-[400px] flex-col rounded-md bg-white px-6 py-12 shadow-lg shadow-slate-400 dark:bg-oxfordBlue dark:text-white dark:shadow-[#002D5D]"
        >
          <h1 className="text-2xl font-bold ">Adauga melodii noi</h1>

          <div className="block w-full">
            {form.map((input, index) => (
              <Input
                isValid={input.isValid}
                index={index}
                value={input.value}
                handelChange={handelChange}
                warningIcon={
                  <WarningSvg className="h-auto w-[24px] fill-red-600  dark:bg-white" />
                }
                validIcon={
                  <DoneSvg className="h-auto w-[24px] fill-green-600 dark:bg-white" />
                }
              />
            ))}
            {inputsNr != 1 ? (
              <button
                onClick={newInput}
                className="w-full rounded-sm border-2 border-solid bg-white p-1 text-center font-semibold text-gray-600"
              >
                Link nou
              </button>
            ) : null}
          </div>

          <button className="m mt-2 rounded-md !bg-yaleBlue px-2 py-1 text-white  hover:!bg-yaleBlue/80 focus:ring-2 focus:!ring-mikadoYellow">
            Send songs
          </button>
        </form>
      </main>
    );
  } else {
    return (
      <main className="flex h-screen items-center  justify-center p-8 sm:ml-56">
        <div className=" flex flex-col items-center rounded-md bg-white px-6 py-12 text-center shadow-lg shadow-slate-400 dark:bg-oxfordBlue dark:text-white dark:shadow-[#002D5D] sm:flex-row">
          <WarningSvg className="h-auto w-[32px] dark:fill-white" />
          <div>
            <h1 className="ml-2 text-lg font-semibold">
              Ai atins limita maxima de sugestii pentru o saptamana
            </h1>
            <p className="text-gray-800 dark:text-gray-100">
              Vei putea sa reveni &nbsp;
              {days[refreshDate.getDay() - 1]} {refreshDate.getDate()}.
              {refreshDate.getMonth() + 1}
            </p>
          </div>
        </div>
      </main>
    );
  }
}
