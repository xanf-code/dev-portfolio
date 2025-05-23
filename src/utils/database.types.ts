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

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: Project;
        Insert: Omit<Project, "id" | "created_at">;
        Update: Partial<Omit<Project, "id" | "created_at">>;
      };
    };
  };
};
