import { createSlice } from "@reduxjs/toolkit";
import { LayerInfo } from "client/info/layer-info";
import { SourceFile } from "client/module/file";

export interface FileSliceState {
  /**
   * List of opened files.
   */
  openFileMap: Map<string, SourceFile>;
  /**
   * The file beding edited.
   */
  editFile: SourceFile;
}

const initialState: FileSliceState = {
  openFileMap: new Map(),
  editFile: null,
};

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    /**
     * Clear the opened file.
     */
    clearOpenFile(state) {
      state.openFileMap.clear();
      state.editFile = null;
    },
    /**
     * 刷新文件图层信息
     */
    refershLayerInfo: (state, action) => {
      if (state.editFile === null) return;
      state.editFile = {
        ...state.editFile,
        layerInfos: action.payload,
      };
    },
    /**
     * 添加图层到文件
     */
    addLayerInfo: (state, action) => {
      state.editFile = {
        ...state.editFile,
        layerInfos: state.editFile.layerInfos.concat([action.payload]),
      };
    },
    /**
     * Remove the layer infonation.
     */
    removeLayerInfo: (state, action) => {
      state.editFile = {
        ...state.editFile,
        layerInfos: state.editFile.layerInfos.filter(
          (layerInfo) => layerInfo.id !== action.payload
        ),
      };

      state.editFile = {
        ...state.editFile,
        activeLayerInfo: state.editFile.layerInfos[0],
      };
    },
    modifyLayerInfo: (state, action) => {
      state.editFile.activeLayerInfo = Object.assign(
        state.editFile.activeLayerInfo,
        action.payload
      );
    },
    /**
     * 切换当前文件的激活图层
     * @param state
     * @param action
     */
    changeActiveLayerInfo: (state, action) => {
      state.editFile = {
        ...state.editFile,
        activeLayerInfo: action.payload,
      };
    },
    /**
     * 添加打开的文件
     */
    addOpenFile: (state, action) => {
      const data = action.payload as SourceFile | SourceFile[];
      let setActiveFile: SourceFile | null = null;
      if (data instanceof Array) {
        data.forEach((file) => {
          state.openFileMap.set(file.md5, file);
        });
        // 如果打开多个文件则取最后一个作为激活的界面
        setActiveFile = data[0] as SourceFile;
      } else {
        state.openFileMap.set(data.md5, data);
        setActiveFile = data as SourceFile;
      }

      if (setActiveFile === null || state.editFile?.md5 === setActiveFile.md5)
        return;
      if (state.editFile) {
        state.editFile = {
          ...state.editFile,
          ...setActiveFile,
        };
      } else {
        state.editFile = setActiveFile;
      }
    },
    /**
     * 切换正在编辑的文件
     * 传入一个文件的md5值
     */
    changeActiveEditFile: (state, action) => {
      const data = action.payload as string;
      const targetFile = state.openFileMap.get(data);
      if (state.editFile.md5 === data || targetFile === null) return;
      if (state.editFile) {
        state.editFile = {
          ...state.editFile,
          ...targetFile,
        };
      } else {
        state.editFile = targetFile;
      }
    },
    /**
     * 根据SourceFile的MD5值设置激活图层信息
     * @param state
     * @param action
     * @returns
     */
    setActiveLayerBySourceFileMD5: (state, action) => {
      const data = action.payload as { id: string; layerInfo: LayerInfo };
      // 如果SourceFile正在处于编辑状态，则直接使用正在编辑的File
      const sourceFile =
        state.editFile.md5 === data.id
          ? state.editFile
          : state.openFileMap.get(action.payload.id);
      if (sourceFile === null) {
        return;
      }

      sourceFile.activeLayerInfo = data.layerInfo;
    },
    /**
     * Switch the currently active editing source file based on the its MD5.
     * @param state
     * @param action.payload MD5 code of the source file.
     */
    switchEditSourceFileByMD5: (state, action: { payload: string }) => {
      if (state.editFile.md5 !== action.payload) {
        const newSourceFile = state.openFileMap.get(action.payload);

        if (newSourceFile) {
          state.editFile = newSourceFile;
        }
      }
    },
  },
});

export const {
  refershLayerInfo,
  addLayerInfo,
  addOpenFile,
  changeActiveLayerInfo,
  changeActiveEditFile,
  clearOpenFile,
  setActiveLayerBySourceFileMD5,
  removeLayerInfo,
  modifyLayerInfo,
  switchEditSourceFileByMD5,
} = fileSlice.actions;

export const reducer = fileSlice.reducer;
