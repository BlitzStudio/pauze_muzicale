import axios from "../api/axios";
import parseLinks from "../api/parseLinks";
const handelSubmission = async function (e) {
  e.preventDefault();
  let ids = [];
  const regex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    const match = input.value.match(regex);
    input.value = "";
    if (match && match[2].length === 11) {
      ids.push(match[2]);
    }
  });
  axios.post(
    "/api/music",
    {
      ids,
    },
    {
      withCredentials: true,
    }
  );
};

const Form = () => {
  return (
    <div className="m-4 rounded-md bg-white bg-opacity-10 px-4 py-8  text-gray-900 backdrop-blur-md">
      <h2 className="mb-1 text-xl font-semibold">Note muzicale</h2>
      <p className="mb-1 text-sm text-gray-900">
        Completeaza formularul de mai jos pentru a iti auzi melodiile preferate
        in timpul pauzelor
      </p>
      <form
        className="flex flex-col"
        action="/"
        method="post"
        onSubmit={handelSubmission}
      >
        <input
          placeholder="YouTube Link"
          className="mb-2 mr-2 block rounded-sm bg-white/50 p-1 outline outline-1"
          name="links[0]"
        />
        <input
          placeholder="YouTube Link"
          className="mb-2 mr-2 block rounded-sm bg-white/50 p-1 outline outline-1"
          name="links[1]"
        />
        <input
          placeholder="YouTube Link"
          className="mb-2 mr-2 block rounded-sm bg-white/50 p-1 outline outline-1"
          name="links[2]"
        />
        <button
          className="mt-auto self-start  rounded-sm bg-purple-800 px-4 py-2 font-medium tracking-wide text-white"
          type="submit"
        >
          Send links
        </button>
      </form>
    </div>
  );
};

export default Form;
