import { createContext, useState, useEffect } from "react";
import useRefreshAccessToken from "../hooks/useRefreshAccessToken";

export const AuthContext = createContext({});

export default function AuthProvider(props) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const refresh = useRefreshAccessToken();
  useEffect(() => {
    const main = async () => {
      const isLoggedIn =
        localStorage.getItem("isLoggedIn") == "true" ? true : false;
      console.log(isLoggedIn);
      if (isLoggedIn == true) {
        setIsLoading(true);
        console.log("Utilizatorul este logat");
        const userData = await refresh();
        setUser(userData);
        setIsLoading(false);
      }
    };
    main();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, isLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
}
