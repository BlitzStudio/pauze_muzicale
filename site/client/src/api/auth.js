import jwtDecode from "jwt-decode";
import axios from "./axios";

export async function loginController(setState, ticket) {
  let token;
  // daca exista un ticket asta inseamna ca utilizatorul nu este conectat("logat")
  // daca nu exista un ticket asta inseamna ca trebuie sa citesc din localStorage daca utilizatorul este sau nu logat
  // cookiurile ar trebui sa aiba o durata de viata de o saptamana

  //work required for solving errors
  if (ticket) {
    axios
      .post(
        "/api/login",
        {
          ticket,
        },
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        const userData = jwtDecode(data.data.token);
        setState({
          ...userData,
          isLoggedIn: true,
        });
        localStorage.setItem("token", data.data.token);
      })
      .catch((err) => {
        console.log(err);
        const $modal = document.getElementById("modal");
        $modal.style.display = "block";
        console.log("Error");
      });
  } else {
    token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    setState({
      ...userData,
      isLoggedIn: true,
    });
  }
}
