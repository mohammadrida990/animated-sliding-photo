import React from "react";
import { CurrentSlideData, Data } from "./main";
import { motion } from "framer-motion";

function BackgroundImage({
  currentSlideData,
  transitionData,
}: {
  currentSlideData: CurrentSlideData;
  transitionData: Data;
}) {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={`${transitionData.img}`}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          src={transitionData.img}
          alt={transitionData.title}
          className="top-0 left-0 z-10 absolute inset-0 brightness-50 w-full h-full object-cover"
        />
      )}

      <motion.img
        key={`${currentSlideData.data.img} transition`}
        // layoutId={`${currentSlideData.data.img}`}
        src={currentSlideData.data.img}
        alt={currentSlideData.data.title}
        className="top-0 left-0 z-10 absolute inset-0 brightness-50 w-full h-full object-cover"
      />
    </>
  );
}

export default BackgroundImage;
