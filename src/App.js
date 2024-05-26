import "./App.css";
import Signup from "./components/Signup";
import "./auth-app.scss";
import { createContext, useRef, useState } from "react";
import Auth from "./components/Auth";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Notfound from "./components/Notfound";

export const themeContext = createContext();

function App() {
  const authRef = useRef(new Auth());
  // const [login, setLogin] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const container =
    "container " + (theme === "dark" ? "dark-container" : "container");

  // const toggleForm = () => {
  //   setLogin(!login);
  // };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              <div className={container}>
                <Login auth={authRef.current} />
              </div>
            }
          ></Route>
          <Route
            path="signup"
            element={
              <div className={container}>
                <Signup auth={authRef.current} />
              </div>
            }
          ></Route>
          <Route path="*" Component={Notfound}></Route>
        </Routes>
      </BrowserRouter>
    </themeContext.Provider>
  );
  // return (
  //   <>
  //     <div className="container">
  //       {login ? <Login auth={authRef.current} toggleForm={toggleForm} /> : <Signup auth={authRef.current} toggleForm={toggleForm} />}
  //     </div>
  //   </>
  // );
}

export default App;
