import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../.firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const AuthInfo = { name: "emon" };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
