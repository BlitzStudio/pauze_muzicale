import React from "react";

export default function Account() {
  return (
    <main className="flex h-screen flex-col items-center justify-start pt-3 sm:ml-48">
      <div className="flex flex-col items-center md:flex-row">
        <img
          // src="https://placehold.co/200"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
          className="h-auto w-[200px] rounded-full "
          alt=""
        />
        <div className="text-center">
          <p className="m-2 mb-0 text-3xl font-bold">Hobart Reichel</p>
          <p className="text-sm text-gray-700">hobart.reichel@example.com</p>
        </div>
      </div>
    </main>
  );
}
