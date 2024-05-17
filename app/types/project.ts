export default interface projectType {
  name: string;
  imagePath: string;
  links: projectLinks;
  description: string;
  techStack: string[];
}

interface projectLinks {
  github: string;
  design: string;
  demo: string;
}
