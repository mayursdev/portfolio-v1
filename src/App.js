import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-mono bg-white dark:bg-neutral-900 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
