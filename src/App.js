import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

const App = () => {
  return (
    <div className="font-mono bg-white dark:bg-neutral-900 min-h-screen transition-all">
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default App;
