import Experience from "./experience";
import { experiences } from "../contents";

export default function Experiences() {
  return (
    <section id="experience" className="mb-16">
      <div className="sticky top-0 z-20 backdrop-blur py-4 -mx-10 lg:-mx-24 md:-mx-24 px-10 lg:px-24 md:px-24">
        <h2 className="text-slate-200 font-bold">EXPERIENCE</h2>
      </div>
      <ol>
        {experiences.map((exp, i) => (
          <Experience experience={exp} key={i} />
        ))}
      </ol>
    </section>
  );
}
