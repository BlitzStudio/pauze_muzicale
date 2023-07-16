import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../../context/AuthContext";

export default function Account() {
  const { user } = useAuth();
  return (
    <main className="flex h-screen flex-col items-center justify-start pt-3 dark:text-white sm:ml-48">
      <div className="flex flex-col items-center md:flex-row">
        <img
          // src="https://placehold.co/200"
          src={user?.picture}
          className="h-auto w-[200px] rounded-full "
          alt=""
        />
        <div className="text-center">
          <p className="m-2 mb-0 text-3xl font-bold">{user.name}</p>
          <p className="text-gray-70 text-sm dark:text-gray-100">
            {user?.email}
          </p>
        </div>
      </div>
    </main>
  );
}
