"use client";
import tigerLottie from "../lib/lottie/tiger-lottie.json"
import { useLottie } from "lottie-react";
import "../styles/Loader.css"

function Loader() {

    const lottieDefault = {
      animationData: tigerLottie,
      loop: true,
      style: {
        width: 400,
        height: 400
      }
    }

    const { View: Tiger } = useLottie(lottieDefault)

  return (
    <div className="loading">
      { Tiger }
      <p>Loading...</p>
    </div>
  );
}

export default Loader;