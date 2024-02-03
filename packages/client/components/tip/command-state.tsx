import useCommand from "../../module/functional/hook/use-command";
import React from "react";

export function CommandState(): React.ReactElement {
  const { commandState } = useCommand();
  return commandState.useFunction ? (
    <div className="absolute bg-blue text-white px-3 py-2 left-50% top-3 -translate-x-50%">
      当前正在：{commandState.useFunction.title}
    </div>
  ) : null;
}
