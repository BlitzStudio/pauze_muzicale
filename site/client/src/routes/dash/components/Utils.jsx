import React, { useState, useEffect } from "react";
import PlaySvg from "../../../svgs/Play";
import axios from "../../../api/axios";
import FilterSvg from "../../../svgs/Filter";

import useAuth from "../../../hooks/useAuth";

// vor fi butoanele pt playMusic start ml start download
export default function Utils() {
  const { user } = useAuth();
  const [isPlaying, setPlayer] = useState(false);
  const [isFilter, setFilter] = useState(false);

  const playerBtn = () => {
    if (!isPlaying) {
      axios.get("/admin/startPlayer", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setPlayer(!isPlaying);
    } else {
      axios.get("/admin/stopPlayer", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setPlayer(!isPlaying);
    }
  };

  const filterBtn = () => {
    axios.get("/admin/startfilter", {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  };
  useEffect(() => {
    axios
      .get("/admin/playerstatus", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setPlayer(response.data);
      });
    axios
      .get("/admin/filterstatus", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setFilter(response.data);
      });
  }, []);
  return (
    <main className="flex flex-col justify-evenly px-2 py-2 md:flex-row">
      <div
        className="my-1 flex cursor-pointer rounded border border-blue-500 bg-transparent fill-white px-2 py-1 pr-4 font-semibold text-white hover:border-transparent hover:bg-blue-500 hover:fill-white hover:text-white"
        onClick={playerBtn}
      >
        <PlaySvg className="h-auto w-[32px]" />
        {!isPlaying ? <button>Play</button> : <button>Stop</button>}
      </div>

      {!isFilter ? (
        <div
          className="my-1 flex cursor-pointer rounded bg-blue-500 fill-white px-2 py-1 font-bold text-white hover:bg-blue-500/80"
          onClick={filterBtn}
        >
          <FilterSvg className="h-auto w-[32px]" />
          <button>Filtreaza melodiile trimise</button>
        </div>
      ) : null}
    </main>
  );
}
