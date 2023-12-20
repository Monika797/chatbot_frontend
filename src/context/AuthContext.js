import { createContext, useContext, useEffect, useState } from "react";
import { checkAuthStatus, loginUser } from "../helpers/api-communicator";

// type User = {
//     name : string ;
//     email :string;
// }

// type UserAuth = {
//     isLoggedIn : boolean;
//     user :User |null;
//     signup : (name : string, email : string , password : string)=>Promise<void>
//     login : (email : string, password : string)=> Promise<void>;
//     logout : ()=> Promise<void>
// }

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = async (email, password) => {
    const data = await loginUser(email, password);
    if (data) {
      setUser({ email: data.user.email, name: data.user.name });
      setIsLoggedIn(true);
    }
  };
  const logout = async () => {};
  const signup = async () => {};

  //fetch if the user'cookies are valid then skip login
  useEffect(() => {
    async function checkStatus() {
      const data = await checkAuthStatus();
      if (data) {
        setUser({ email: data.user.email, name: data.user.name });
        setIsLoggedIn(true);
      }
    }
    checkStatus();
  }, []);

  const value = {
    user,
    isLoggedIn,
    signup,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
