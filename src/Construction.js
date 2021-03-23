import React from "react";
import Lottie from "react-lottie";
import animationData from "./construction.json";

export default function Construction() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={30} width={100} />
    </div>
  );
}
