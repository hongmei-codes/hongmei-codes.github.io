import experienceType from "../types/experience";

const expriences: experienceType[] = [
  {
    jobTitle: "Fullstack Developer",
    organization: {
      name: "rimm",
      websiteURL: "https://rimm.io/",
      linkedinURL: "https://www.linkedin.com/company/rimmsustainability",
    },
    startTime: {
      month: "Jun",
      year: 2021,
    },
    endTime: {
      ongoing: true,
      month: "",
      year: 0,
    },
    summary:
      "Craft adaptable product, build web application, style user interface, and deploy trailored SaaS offerings for a global clientele including small and midsize enterprises, non-profit organizations, and multinational corporation. Other significant contributions include architecting automated payment and accounting system, creating consistent design system, and more.",
    techSkills: ["HTML", "CSS", "JavaScript", "SQL", "Python"],
  },
  {
    jobTitle: "Frontend Developer",
    organization: {
      name: "stemly",
      websiteURL: "https://www.stemly.ai/",
      linkedinURL: "https://www.linkedin.com/company/stemly/",
    },
    startTime: {
      month: "Sep",
      year: 2022,
    },
    endTime: {
      ongoing: false,
      month: "Jun",
      year: 2021,
    },
    summary:
      "Communicate with clients, engineers, designers, and other stakeholders to deliver SaaS solutions. Maintained and cleaned up codebase to improve web application performance. Made many helpful internal contributions like writing clear technical documentation, setting up end-to-end testing, and improving developer experience.",
    techSkills: ["Vue.js", "Sass", "Python", "Flask", "Shell", "Docker"],
  },
];

export default expriences;
