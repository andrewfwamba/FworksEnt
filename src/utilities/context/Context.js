import { createContext, useContext, useEffect, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [processing, setProcessing] = useState(true);

  const fetchUser = async () => {
    setProcessing(true);
    const userData = localStorage.getItem("token");
    let user = JSON.parse(userData);
    setUser(user);
    if (userData !== null) {
      setLoggedIn(true);
      setTimeout(() => {
        setProcessing(false);
      }, 2000);
    } else {
      setLoggedIn(false);
      setProcessing(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, [loggedIn]);
  return (
    <LoginContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        user,
        setUser,
        processing,
        setProcessing,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export const useLogin = () => useContext(LoginContext);
export default LoginProvider;
