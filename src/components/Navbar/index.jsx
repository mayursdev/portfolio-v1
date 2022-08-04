import React from "react";
import DarkModeToggler from "./DarkModeToggler";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="flex justify-end">
        <DarkModeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
