import React from "react";

const SectionTitle = ({ icon, title }) => {
  return (
    <h2 className="text-xl font-bold dark:text-slate-100">
      <span className="text-2xl pr-1">{icon}</span>
      {title}
    </h2>
  );
};

export default SectionTitle;
