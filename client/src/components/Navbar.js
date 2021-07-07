import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggler = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <h1>Top Women's Soccer Searches</h1>
      <div className="dark-mode">
        <button
          onClick={toggler}
          className={darkMode ? "dark" : "light"}
        >
          Theme
        </button>
      </div>
    </div>
  );
};

export default Nav;
