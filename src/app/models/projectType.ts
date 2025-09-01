export type ProjectType = {
  title: string;
  description: string;
  year: number;
  month: number;
  statusCompleted: boolean;
  images: string[];
  technology: string[];
  nbrContribuate: number;
  github: string | false;
  key: string[];
  type: string;
};
