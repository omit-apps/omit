import { UnknownAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { FunctionalType } from "../function";
import { RootState } from "../store";
import { changeUseFunction as commandChangeUseFunction } from "../store/reducers/command";
import { FunctionUnsubscribe } from "../info/func-info";

export default function useCommand() {
  const dispatch = useDispatch();
  const commandState = useSelector((state: RootState) => state.command);

  /**
   * 切换正在执行的函数
   *
   * 该状态仅仅切换的提示信息
   * @param fun
   * @returns
   */
  const changeUseFunction: (fun: FunctionalType) => UnknownAction = (
    fun: FunctionalType
  ) => dispatch(commandChangeUseFunction(fun));

  /**
   * 执行功能函数
   * @param fun
   * @param params
   */
  function executeFunction<T extends FunctionalType>(
    fun: T,
    params: Parameters<T["execute"]>[0]
  ): FunctionUnsubscribe {
    changeUseFunction(fun);
    return fun.execute(params);
  }

  return {
    commandState,
    executeFunction,
  };
}
