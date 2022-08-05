import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 mt-3 text-center text-xs dark:text-slate-100">
      <p>
        Designed & developed with ❤️
        <br /> by Mayur Saroj &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
