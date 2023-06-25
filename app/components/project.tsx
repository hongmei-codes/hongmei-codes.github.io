import projectType from "../types/project";
import { CiFolderOn } from "react-icons/ci";
import { FiGithub, FiFigma, FiExternalLink } from "react-icons/fi";

interface Props {
  project: projectType;
}

export default function Project({ project }: Props) {
  return (
    <div className="p-4 flex gap-4 flex-col border-solid border dark:border-slate-700 border-slate-300 rounded-lg">
      <div className="flex justify-between items-start">
        <CiFolderOn size={"56px"} className="text-primary" />
        <div className="flex gap-1">
          {project.links.github === "" ? (
            ""
          ) : (
            <a
              href={project.links.github}
              target="_blank"
              className="p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/15 lg:cursor-pointer hover:text-primary"
            >
              <FiGithub size={16} />
            </a>
          )}
          {project.links.design === "" ? (
            ""
          ) : (
            <a
              href={project.links.design}
              target="_blank"
              className="p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/15 lg:cursor-pointer hover:text-primary"
            >
              <FiFigma size={16} />
            </a>
          )}
          {project.links.demo === "" ? (
            ""
          ) : (
            <a
              href={project.links.demo}
              target="_blank"
              className="p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/15 lg:cursor-pointer hover:text-primary"
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-slate-600 dark:text-slate-200 font-medium mb-2">
          {project.name}
        </h3>
        <p className="text-xs">{project.description}</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        {project.techStack.map((tech, i) => (
          <div
            className="text-primary bg-primary/10 dark:bg-primary/15 py-0.5 px-2 font-mono text-[10px] rounded-full"
            key={i}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
