import { File } from "client/info/file-info";
export const fileList: File[] = [
  {
    id: "1",
    name: "Element Plus",
    type: "folder",
  },
  {
    id: "2",
    name: "Any Design",
    type: "folder",
  },
  {
    id: "3",
    name: "My Design",
    type: "file",
  },
];

export function getFolderDataById(id: string): File[] {
  return [
    { id: "1_1", name: "新建文件夹", type: "folder" },
    { id: "1_2", name: "新建文件夹(2)", type: "folder" },
    { id: "1_3", name: "New Design", type: "file" },
  ];
}