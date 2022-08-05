import React from "react";

const SkillItem = ({ title, logo }) => {
  return (
    <div className="w-25 h-25">
      <div className="border-light rounded-md p-4 px-5 dark:border-dark">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
    </div>
  );
};

export default SkillItem;
