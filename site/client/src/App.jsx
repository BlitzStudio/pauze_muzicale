import Hero from "./components/Hero";
import { loginController } from "./api/auth";
import { useState, useEffect } from "react";
import Modal from "./components/Modal.";

const App = function () {
  const [user, setUser] = useState({});
  useEffect(() => {
    loginController(setUser);
  }, []);

  return (
    <div className="relative box-border">
      <Hero userData={user} setUser={setUser} />
      <Modal />
    </div>
  );
};
export default App;
