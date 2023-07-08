import { createContext, useState, useEffect, useDebugValue } from "react";
import useRefreshAccessToken from "../hooks/useRefreshAccessToken";

export const AuthContext = createContext({});

export default function AuthProvider(props) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const refresh = useRefreshAccessToken();
  useEffect(() => {
    const main = async () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn) {
        setIsLoading((prevState) => !prevState);
        console.log("Utilizatorul este logat");
        const userData = await refresh();
        setUser(userData);
        setIsLoading((prevState) => !prevState);
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
