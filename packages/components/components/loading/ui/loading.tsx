import lottie from "lottie-web";
import React, { useEffect } from "react";
import { LoadingPropType } from "../type/loading";
import RocketAnimation from "../../../assets/lotties/RocketAnimation.json";

export function Loading(props: LoadingPropType): React.ReactElement {
  useEffect(() => {
    const animateItem = lottie.loadAnimation({
      container: document.querySelector("#animation-container"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: RocketAnimation,
    });
    return () => {
      animateItem.destroy();
    };
  }, []);
  return (
    <div
      className={`h-full flex flex-col justify-center items-center ${props.className}`}
    >
      <div id="animation-container" className="w-240px"></div>
      <div>{props.text}</div>
    </div>
  );
}
