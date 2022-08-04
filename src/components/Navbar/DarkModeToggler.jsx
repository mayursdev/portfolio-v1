import React, { useContext } from "react";
import { Theme } from "../../context/Theme";
import Moon from "../svg/Moon";
import Sun from "../svg/Sun";

const DarkModeToggler = () => {
  const { theme, toggleTheme } = useContext(Theme);

  const toggleThemeHandler = () => {
    toggleTheme(theme);
  };

  return (
    <button onClick={toggleThemeHandler}>
      {theme === "light" ? (
        <Moon className="w-7 h-7" />
      ) : (
        <Sun className="w-7 h-7 stroke-slate-100" />
      )}
    </button>
  );
};

export default DarkModeToggler;
