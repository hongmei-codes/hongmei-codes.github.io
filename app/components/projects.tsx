import { projects } from "../contents";
import Project from "./project";

export default function Projects() {
  return (
    <section id="project" className="mb-16">
      <div className="sticky top-0 z-20 backdrop-blur dark:bg-slate-900/75 bg-slate-200/75 py-4 -mx-10 lg:-mx-24 md:-mx-24 px-10 lg:px-24 md:px-24">
        <h2 className="dark:text-slate-200 text-slate-600 font-bold">
          PROJECTS
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </section>
  );
}
