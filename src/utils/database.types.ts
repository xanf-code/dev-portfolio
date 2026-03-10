export type ProjectStatus = "released" | "develop";

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  status: ProjectStatus;
  imageurl?: string;
  bgColor?: string;
  created_at?: string;
  skills: string;
}


