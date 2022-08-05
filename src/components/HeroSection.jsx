import React from "react";
import Envelope from "./svg/Envelope";
import GithubLogo from "./svg/GithubLogo";
import LinkedinLogo from "./svg/LinkedinLogo";

const HeroSection = () => {
  return (
    <header className="p-4 text-slate-900 dark:text-slate-200">
      <h1 className="text-3xl font-bold">
        Hello<span className="text-4xl">👋</span>,<br /> i'm Mayur Saroj
      </h1>
      <p className="mt-2">
        A developer who is passionate about building applications, adapts very
        quickly to emerging frameworks, languages and loves exploring new
        technologies to integrate them together for solving real world problems
      </p>
      <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:gap-3">
        <a className="flex gap-1" href="mailto:mayursdev@gmail.com">
          <Envelope className="dark:fill-slate-100" />
          <span className="underline">mayursdev@gmail.com</span>
        </a>
        <a
          className="flex gap-1"
          href="https://github.com/mayursdev"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo className="dark:fill-slate-100" />
          <span className="underline">mayursdev</span>
        </a>
        <a
          className="flex gap-1"
          href="https://www.linkedin.com/in/mayursdev"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo className="dark:fill-slate-100" />
          <span className="underline">mayursdev</span>
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
