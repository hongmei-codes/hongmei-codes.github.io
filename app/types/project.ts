export default interface projectType {
  name: string;
  imagePath: string;
  links: projectLinks;
  description: string;
  tech_stack: string[];
}

interface projectLinks {
  github: string;
  design: string;
  demo: string;
}
