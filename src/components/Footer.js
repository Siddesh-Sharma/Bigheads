import React from "react";
import animationData from "./HomeComponents/footer.json";
import Lottie from "react-lottie";
import "./Footer.css";

export default function Footer() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="footer-lottie">
      <Lottie options={defaultOptions} />
    </div>
  );
}
