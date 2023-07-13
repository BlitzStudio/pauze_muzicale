import React, { useEffect, useState } from "react";
import linkParser from "../../api/linkParser.js";
import { toast } from "react-toastify";
import jwt from "jwt-decode";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";

import Input from "../../components/ValidatedInput";
import WarningSvg from "../../svgs/Warning";
import DoneSvg from "../../svgs/Done";
import CloseSvg from "../../svgs/Close.jsx";

export default function SongForm() {
  const { user, setUser, isLoading } = useAuth();

  const [form, setForm] = useState([{ value: "", isValid: false, id: "" }]);
  const [inputsNr, setInputNr] = useState();
  const [isAllowed, setIsAllowed] = useState(true);

  const refreshDate = new Date(user?.refreshWindow);

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
    const link = linkParser(value);
    let isValid = link ? true : false;
    const id = isValid ? link : "";

    // afiseaza un mesaj daca linkul este o copie
    form.forEach((input) => {
      if (input.id == id && input.id && input.isValid) {
        isValid = false;
        toast.warn("Tocmai ai introdus o copie, te rog sa introduci alt link", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      }
    });

    setForm((prevState) => {
      return prevState.map((data, ind) => {
        if (index == ind) {
          data.value = value;
          data.isValid = value.length == 0 ? true : isValid;
          data.id = id;
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
      return [
        ...prevState,
        {
          value: "",
          isValid: false,
        },
      ];
    });
  }

  function handelClearOrDelete(e, index) {
    if (form[index].value) {
      setForm((prevState) => {
        return prevState.map((data, ind) => {
          if (index == ind) {
            data.value = "";
          }
          return data;
        });
      });
    } else if (form.length != 1) {
      setForm((prevState) => {
        let finalState = [];
        prevState.forEach((data, ind) => {
          if (index != ind) {
            finalState.push(data);
          }
        });
        return finalState;
      });
    }
  }

  function handelSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    let formIsValid = true;
    // validaream formularului se v-a face daca input.value !=""
    // pt moment pana actualizez Validated Input merge si cu inputurile goale
    // la validated input trebuie sa adaug un btn pt clear form si delete input(2in1)
    for (let i = 0; i < form.length && formIsValid; i++) {
      if (!form[i].isValid) {
        formIsValid = false;
      }
    }

    if (formIsValid) {
      axios
        .post(
          "/songs",
          {
            ids: form.map((link) => {
              return link.id;
            }),
          },
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        )
        .then((response) => {
          setUser({ ...jwt(response.data), accessToken: response.data });
        });
      // reseteaza inputurile
      setForm([{ value: "", isValid: false, id: "" }]);
    } else {
      toast.error(
        "Pentru a trimite formularul toate datele introduse trebuie sa fie valide",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        }
      );
    }
  }

  useEffect(() => {
    const now = new Date();
    //if (refreshDate.getTime() >= now.getTime() && user?.submittedCount == 3) {
    //in cazul in care utilizatorul nu trebuie sa trmita melodii
    //     } else if (refreshDate.getTime() < now.getTime()) {
    // in cazul in care refreshWindowul nu a fost resetat pe server
    // else
    // pt a afisa inputurile

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
    }
  }, [user]);

  if (isAllowed) {
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
                clearCloseIcon={
                  <CloseSvg className="h-auto w-[24px] fill-green-600 dark:bg-white" />
                }
                handelClearOrDelete={handelClearOrDelete}
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

          <button
            onClick={handelSubmit}
            type="submit"
            className="m mt-2 rounded-md !bg-yaleBlue px-2 py-1 text-white  hover:!bg-yaleBlue/80 focus:ring-2 focus:!ring-mikadoYellow"
          >
            Trimite melodiile
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
