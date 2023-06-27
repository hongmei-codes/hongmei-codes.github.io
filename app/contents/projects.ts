import projectType from "../types/project";

const projects: projectType[] = [
  {
    name: "Portfolio Site",
    imagePath: "",
    links: {
      github: "https://github.com/hongmei-codes/hongmei-codes.github.io",
      design:
        "https://www.figma.com/community/file/1371512171219851956/hongmei-codes-github-io",
      demo: "",
    },
    description:
      "This site. I document details about my work and projects here. Deployed with Vercel.",
    techStack: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    name: "Money I/O",
    imagePath: "",
    links: {
      github: "https://github.com/hongmei-codes/money_io",
      design: "",
      demo: "https://hongmei-codes.github.io/money_io/",
    },
    description:
      "The first ever react web application I built and deployed. It’s simple income and expense tracker.",
    techStack: ["React.js", "HTML", "CSS", "JavaScript"],
  },
];

export default projects;
