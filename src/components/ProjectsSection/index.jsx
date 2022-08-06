import React from "react";
import SectionTitle from "../Utils/SectionTitle";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    id: 1,
    title: "InstaFetch",
    description:
      "Instafetch is web app that enables its users to download posts, threads, reels, IGTV from instagram to their devices.",
    livePreview: "https://instafetch-instadownloader.netlify.app/",
    sourceCode: "https://github.com/mayursdev/instafetch-client/",
    screenshot: "/assets/images/instafetch-screenshot.png",
  },
  {
    id: 2,
    title: "React Store",
    description:
      "A fully responsive multi-page merchandise store built with tailwindcss, reactjs on frontend, firebase on backend and integrated stripe payment gateway.",
    livePreview: "https://react-merchandise-store.netlify.app/",
    sourceCode: "https://github.com/mayursdev/react-store",
    screenshot: "/assets/images/reactstore-screenshot.png",
  },
  {
    id: 3,
    title: "SubNotify",
    description:
      "A telegram bot that sends user latest post updates periodically from their favourite subreddit.",
    sourceCode: "https://github.com/mayursdev/subnotify-tg",
    screenshot: "/assets/images/subnotify-screenshot.png",
  },
  {
    id: 4,
    title: "Simple Social",
    description:
      "A complete social media clone with beautiful UI, has a unique feature of health reminder implemented which reminds users to take breaks at regular intervals.",
    livePreview: "http://simplesocial.rf.gd/",
    sourceCode: "https://github.com/mayursdev/simplesocial",
    screenshot: "/assets/images/simple-social-screenshot.png",
  },
  {
    id: 5,
    title: "Mini React Tube",
    description:
      "A minimal frontend to browse youtube videos. Built with semantic UI, reactjs, axios which interacts with youtube api",
    livePreview: "https://mini-react-tube.netlify.app/",
    sourceCode: "https://github.com/mayursdev/mini-react-tube/",
    screenshot: "/assets/images/mini-react-tube-screenshot.png",
  },
];

const ProjectsSection = () => {
  return (
    <div className="p-4">
      <SectionTitle icon="🗃️" title="Projects" />
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
