import { createContext, useState, useEffect } from "react";
import useRefreshAccessToken from "../hooks/useRefreshAccessToken";

export const AuthContext = createContext({});

export default function AuthProvider(props) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const refresh = useRefreshAccessToken();

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem("isLoggedIn") == "true" ? true : false;
    if (isLoggedIn == true) {
      setIsLoading(true);
      setUser({
        email: "kaylah_pfannerstill@example.com",
        name: "Kaylah Pfannerstill",
        picture: "https://placehold.co/400",
        iat: Date.now(),
        // expira intr o zi
        exp: Date.now() + 24 * 60 * 60,
        role: "admin",
        azp: "f84cafa2-81e4-42ab-85cb-21680437d684",
        submittedCount: 0,
        refreshWindow: Date.now() + 7 + 24 * 60 * 60,
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
}
