import { Dispatch } from "@reduxjs/toolkit";
import { addOpenFile } from "../reducer/file-slice";
import { SourceFile } from "../type/file";

export function useFileParser(path: string, dispatch: Dispatch): SourceFile {
  const file = new SourceFile();
  file.name = "新建文件";
  file.ext = "ade";
  file.md5 = "1";
  const file2 = new SourceFile();
  file2.name = "新建文件1";
  file2.ext = "ade";
  file2.md5 = "2";
  // Add file to store.
  dispatch(addOpenFile([file, file2]));

  return file;
}
