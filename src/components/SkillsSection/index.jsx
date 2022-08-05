import React from "react";
import SectionTitle from "../Utils/SectionTitle";
import SkillItem from "./SkillItem";

const skills = [
  {
    id: 1,
    title: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    title: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    title: "TAILWINDCSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    id: 4,
    title: "JAVASCRIPT",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 5,
    title: "REACT",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },
  {
    id: 6,
    title: "REDUX",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    id: 7,
    title: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    id: 8,
    title: "NODEJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 9,
    title: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    id: 10,
    title: "FIREBASE",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    id: 11,
    title: "GIT & GITHUB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const SkillsSection = () => {
  return (
    <div className="p-4">
      <SectionTitle icon="🚀" title="Skills" />
      <div className="mt-5 grid grid-cols-3 gap-6 sm:grid-cols-4">
        {skills.map((skill) => (
          <SkillItem key={skill.id} title={skill.title} logo={skill.logo} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
