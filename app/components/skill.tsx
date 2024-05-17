import skillType from "../types/skill";
import { MdChevronRight } from "react-icons/md";

interface Prop {
  skill: skillType;
}

export default function Skill({ skill }: Prop) {
  return (
    <div>
      <p className="text-slate-600 dark:text-slate-200 text-sm font-medium">
        {skill.category}
      </p>
      <div className="mt-2">
        {skill.list.map((item, i) => (
          <div className="flex items-center gap-1" key={i}>
            <MdChevronRight className="text-primary" size={12} />
            <p className="text-xs font-mono">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
