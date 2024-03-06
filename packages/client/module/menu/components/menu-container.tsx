import { RootState } from "client/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../reducer/menu";
import MenuItemComponent from "./menu-item-component";

export function MenuContainer(): React.ReactElement {
  const dispatch = useDispatch();
  const menuState = useSelector((state: RootState) => state.menu);

  const captureGlobalMousedownEvent = () => {
    dispatch(closeMenu());
  };

  useEffect(() => {
    // On menu display change
    if (menuState.show) {
      window.addEventListener("click", captureGlobalMousedownEvent);
    }

    return () => {
      window.removeEventListener("click", captureGlobalMousedownEvent);
    };
  }, [menuState.show]);

  return menuState.show ? (
    <div
      className="min-w-160px absolute bg-dark-50 overflow-hidden shadow-xl rounded text-white z-99"
      style={{
        top: menuState.position.y + "px",
        left: menuState.position.x + "px",
      }}
    >
      {menuState.renderItems.map((item) => (
        <MenuItemComponent key={item.id} item={item} />
      ))}
    </div>
  ) : null;
}
