export interface File {
  id: string;
  name: string;
  type: "file" | "folder";
}

export type FileType = File["type"];
