import { RootState } from "client/store";
import React from "react";
import { useSelector } from "react-redux";

export function MenuContainer(): React.ReactElement {
  const menuState = useSelector((state: RootState) => state.menu);
  return <div className=""></div>;
}
