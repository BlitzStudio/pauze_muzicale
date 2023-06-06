const Modal = () => {
  return (
    <div
      id="modal"
      className="absolute left-0 top-0 bg-white bg-opacity-10 backdrop-blur-sm"
    >
      <div className="flex min-h-[100vh] w-[100vw] flex-col items-center justify-center">
        <div className="min-w-[320px] rounded-md bg-purple-800 fill-white p-2 text-center text-white">
          <div className="flex items-end justify-end">
            <svg
              id="modalBtn"
              onClick={() => {
                const $modal = document.getElementById("modal");
                $modal.style.display = "none";
              }}
              xmlns="http://www.w3.org/2000/svg"
              height="36"
              viewBox="0 96 960 960"
              width="36"
            >
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">
            Acesta nu este un cont valid pentru a accesa aplicatia
          </h1>
          <p>
            Te rog incearca cu mailul autorizat de{" "}
            {import.meta.env["VITE_SCHOOL_NAME"]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
