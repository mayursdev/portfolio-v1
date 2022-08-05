import React from "react";

const SkillItem = ({ title, logo }) => {
  return (
    <div className="w-25 h-25">
      <div className="border-light rounded-md p-5 px-6 sm:p-9 sm:px-10 lg:p-10 lg:px-11 dark:border-dark">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
    </div>
  );
};

export default SkillItem;
