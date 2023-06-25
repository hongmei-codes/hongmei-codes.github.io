import projectType from "../types/project";

const projects: projectType[] = [
  {
    name: "Portfolio Site",
    imagePath: "",
    links: {
      github: "https://github.com/hongmei-codes/hongmei-codes.github.io",
      design: "",
      demo: "",
    },
    description:
      "This site. I document details about my work and projects here. Deployed with Vercel.",
    techStack: ["nextjs", "tailwind", "typescript"],
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
    techStack: ["react", "html", "css", "javascript"],
  },
];

export default projects;
