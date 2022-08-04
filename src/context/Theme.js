import { createContext, useEffect, useState } from "react";

const Theme = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const toggleTheme = (currentTheme) => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const value = { theme, toggleTheme };
  return <Theme.Provider value={value}> {children}</Theme.Provider>;
};

export { Theme, ThemeProvider };
