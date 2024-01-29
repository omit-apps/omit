import { Dispatch } from "@reduxjs/toolkit";
import { addOpenFile } from "../../store/reducers/application";
import { SourceFile } from "../type/file";

export function useFileParser(path: string, dispatch: Dispatch): SourceFile {
  const file = new SourceFile();
  file.name = "新建文件";
  file.ext = "ade";
  file.md5 = "1";
  // Add file to store.
  dispatch(addOpenFile(file));

  return file;
}