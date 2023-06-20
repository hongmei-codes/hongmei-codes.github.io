interface organization {
  name: string;
  websiteURL: string;
  linkedinURL: string;
}

interface startTime {
  month: string;
  year: number;
}

interface endTime {
  ongoing: boolean;
  month: string;
  year: number;
}

export default interface experienceType {
  jobTitle: string;
  organization: organization;
  startTime: startTime;
  endTime: endTime;
  summary: string;
  techSkills: string[];
}
