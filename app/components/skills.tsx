import Skill from "./skill";
import { skills } from "../contents";

export default function Skills() {
  return (
    <section id="skills" className="mb-16">
      <div className="sticky top-0 z-20 backdrop-blur dark:bg-slate-900/60 bg-slate-200/60 py-4 -mx-10 lg:-mx-24 md:-mx-24 px-10 lg:px-24 md:px-24">
        <h2 className="dark:text-slate-200 text-slate-600 font-bold">SKILLS</h2>
      </div>
      <div className="grid gap-3 lg:gap-6 md:gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 ">
        {skills.map((skill, i) => (
          <Skill skill={skill} key={i} />
        ))}
      </div>
    </section>
  );
}
