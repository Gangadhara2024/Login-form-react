import Signup from "./components/Signup";
import "./auth-app.scss";
import { createContext, useRef, useState } from "react";
import Auth from "./components/Auth";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Notfound } from "./components/Notfound";

export const Themecontext = createContext();

const App = () => {
  // const [showLogin, setShowLogin] = useState(false);
  const [theme, setTheme] = useState("light");

  const authref = useRef(new Auth());

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const container = "container " + (theme === "dark" ? "dark-container" : "");

  return (
    <Themecontext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              <div className={container}>
                <Login auth={authref.current} />
              </div>
            }
          />
          <Route
            path="signup"
            element={
              <div className={container}>
                <Signup auth={authref.current} />
              </div>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </Themecontext.Provider>
  );
  //   // return (
  //   //   <div className="container">
  //   //     {showLogin ? (
  //   //       <Login
  //   //         auth={authref.current}
  //   //         setShowLogin={setShowLogin}
  //   //         showLogin={showLogin}
  //   //       />
  //   //     ) : (
  //   //       <Signup
  //   //         auth={authref.current}
  //   //         setShowLogin={setShowLogin}
  //   //         showLogin={showLogin}
  //   //       />
  //   //     )}
  //   //   </div>
  //   // );
};

export default App;
