import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div className="flex flex-col border-light rounded dark:border-dark">
      <div className="h-56 sm:h-80 md:h-64">
        <img
          src={project.screenshot}
          alt={project.title}
          className="h-full w-full object-cover object-top border-light-b rounded-t dark:border-dark-b"
        />
      </div>
      <div className="p-4 pt-2.5 flex flex-col justify-evenly h-full text-slate-900 lg:p-6 lg:pt-3  dark:text-slate-200">
        <div>
          <h3 className="font-semibold lg:text-lg">{project.title} </h3>
          <p className="text-sm mt-1 lg:text-[15px]">{project.description} </p>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          {project.livePreview && (
            <a
              href={project.livePreview}
              target="_blank"
              rel="noreferrer"
              className="block border-light py-2.5 px-5 text-center font-semibold text-sm bg-blue-600 text-white hover:bg-blue-700 rounded transition-all dark:border-dark"
            >
              🔗 Live Preview
            </a>
          )}
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noreferrer"
              className="block border-light py-2.5 px-5 text-center font-semibold text-sm rounded dark:border-dark"
            >
              ⚡ Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
