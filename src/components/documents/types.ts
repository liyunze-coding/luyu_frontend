export type Doc = {
  id: string;
  name: string;
  type: "pdf" | "doc" | "image" | "audio";
  sizeKB: number;
  updatedAt: string; // ISO date
};
