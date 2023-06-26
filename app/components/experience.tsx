import experienceType from "../types/experience";

interface Props {
  experience: experienceType;
}

export default function Experience({ experience }: Props) {
  return (
    <li className="mb-12">
      <div className="flex flex-col md:flex-row lg:flex-row gap-4">
        <header className="font-mono text-xs whitespace-nowrap mt-1 lowercase">{`${
          experience.startTime.month
        } ${experience.startTime.year} - ${
          experience.endTime.ongoing
            ? "present"
            : experience.endTime.month + " " + experience.endTime.year
        }`}</header>
        <div>
          <p className="">
            {experience.jobTitle}{" "}
            <a
              href={experience.organization.websiteURL}
              target="_blank"
              className="mb-2 hover:text-primary dark:hover:text-primary dark:text-slate-200 text-slate-600 font-medium inline-block"
            >
              {`@${experience.organization.name}`}
            </a>
          </p>
          <div className="text-xs">{experience.summary}</div>
          <div className="flex gap-2 flex-wrap mt-4">
            {experience.techSkills.map((skill, i) => (
              <div
                className="text-primary bg-primary/10 dark:bg-primary/15 py-0.5 px-2 font-mono text-[10px] rounded-full"
                key={i}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
