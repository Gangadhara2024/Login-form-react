import React, { useContext } from "react";
import { themeContext } from "../App";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <div className={` navbar ${theme === "dark" ? "dark-navbar" : ""} `}>
      <button className=" theme material-icons" onClick={toggleTheme}>
        dark_mode
      </button>
    </div>
  );
};
