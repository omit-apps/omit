import { createSlice } from "@reduxjs/toolkit";
import { SourceFile } from "../../file/type/file";

export interface ApplicationState {
  /**
   * 打开的文件列表
   */
  openFileList: SourceFile[];
  /**
   * 正在编辑的文件
   */
  editFile: SourceFile;
}

const initialState: ApplicationState = {
  openFileList: [],
  editFile: null,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    /**
     * 清空已经打开的文件
     */
    clearOpenFile(state) {
      state.openFileList.length = 0;
    },
    /**
     * 刷新文件图层信息
     */
    refershLayerInfo: (state, action) => {
      if (state.editFile === null) return;
      state.editFile.layerInfos = action.payload;
    },
    /**
     * 添加图层到文件
     */
    addLayerInfo: (state, action) => {
      state.editFile.layerInfos = state.editFile.layerInfos.concat([
        action.payload,
      ]);
    },
    /**
     * 切换当前文件的激活图层
     * @param state
     * @param action
     */
    changeActiveLayerInfo: (state, action) => {
      const editFile = state.editFile;
      if (editFile.activeLayerInfo) {
        editFile.activeLayerInfo = {
          ...editFile.activeLayerInfo,
          ...action.payload,
        };
      } else {
        editFile.activeLayerInfo = action.payload;
      }
    },
    /**
     * 添加打开的文件
     */
    addOpenFile: (state, action) => {
      const data = action.payload;
      let setActiveFile: SourceFile | null = null;
      if (data instanceof Array) {
        state.openFileList = state.openFileList.concat(data);
        // 如果打开多个文件则取最后一个作为激活的界面
        setActiveFile = data[data.length - 1] as SourceFile;
      } else {
        state.openFileList = state.openFileList.concat([data]);
        setActiveFile = data as SourceFile;
      }

      if (setActiveFile === null) return;
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
     */
    changeActiveEditFile: (state, action) => {
      state.editFile = action.payload;
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
} = applicationSlice.actions;

export default applicationSlice.reducer;
