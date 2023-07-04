import { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider(props) {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
