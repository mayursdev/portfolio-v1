import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div className="flex flex-col border border-slate-300 rounded dark:border-slate-600">
      <div className="h-64">
        <img
          src={project.screenshot}
          alt={project.title}
          className="h-full w-full object-cover object-top border-b border-b-slate-300 rounded-t dark:border-b-slate-600"
        />
      </div>
      <div className="p-4 pt-2 dark:text-slate-100">
        <div>
          <h3 className="font-semibold text-xl">{project.title} </h3>
          <p className="text-sm mt-1">{project.description} </p>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          {project.livePreview && (
            <a
              href={project.livePreview}
              target="_blank"
              rel="noreferrer"
              className="block border border-slate-300 py-2.5 px-5 text-center font-semibold text-sm bg-blue-600 text-white hover:bg-blue-700 rounded transition-all dark:border-slate-600"
            >
              🔗 Live Preview
            </a>
          )}
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noreferrer"
              className="block border border-slate-300 py-2.5 px-5 text-center font-semibold text-sm rounded dark:border-slate-600"
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
