import { UnknownAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { FunctionalType } from "../function";
import { RootState } from "../store";
import {
  clearUnsubscription,
  changeUseFunction as commandChangeUseFunction,
  setUnsubscription,
} from "../store/reducers/command";

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
  ): void {
    let unsubscription: () => void;
    if (commandState.useFunction) {
      dispatch(clearUnsubscription());
      changeUseFunction(null);
      // 如果不是当前的命令
      if (fun.id !== commandState?.useFunction.id) {
        changeUseFunction(fun);

        // TODO: 参数类型推断后续在解决
        // @ts-ignore
        unsubscription = fun.execute(params);
      }
    } else {
      changeUseFunction(fun);
      // @ts-ignore
      unsubscription = fun.execute(params);
    }

    dispatch(setUnsubscription(unsubscription));
  }

  return {
    commandState,
    executeFunction,
  };
}
