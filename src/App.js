import "./auth-app.scss";
import { createContext, useState } from "react";
import { Navbar } from "./authusingcontextAPI/Navbar";

export const Themecontext = createContext();

const App = () => {
  const [signup, setSignup] = useState(true);
  const [login, setLogin] = useState(false);

  const loginpagebtn = () => {
    setLogin(true);
    setSignup(false);
    console.log("signup");
  };
  const loginBtn = () => {
    setSignup(true);
    setLogin(false);
    console.log("login");
  };
  return (
    <Themecontext.Provider
      value={{
        loginpagebtn,
        loginBtn,
        signup,
        login,
        setSignup,
        setLogin,
      }}
    >
      <>
        <Navbar />
      </>
    </Themecontext.Provider>
  );
};

export default App;
