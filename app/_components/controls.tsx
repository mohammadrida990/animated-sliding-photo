/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

function Controls({
  data,
  currentSlideData,
  transitionData,
  initData,
  handleData,
  handleCurrentSlideData,
  handleTransitionData,
  sliderData,
}: any) {
  const handlePrev = () => {
    handleData((prev: any) => [
      transitionData ? transitionData : initData,
      ...prev.slice(0, prev.length - 1),
    ]);

    handleCurrentSlideData({
      data: transitionData ? transitionData : sliderData[0],
      index: sliderData.findIndex(
        (ele: any) => ele.img === data[data.length - 1].img
      ),
    });

    handleTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {
    handleData((prev: any) => prev.slice(1));

    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele: any) => ele.img === data[0].img),
    });

    handleTransitionData(data[0]);

    setTimeout(() => {
      handleData((newD: any) => [
        ...newD,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };

  return (
    <div className="flex items-center gap-3 px-0 md:px-1 py-3 md:py-5">
      <SliderButton handleClick={handlePrev}>
        <IoIosArrowBack className="text-xl" />
      </SliderButton>

      <SliderButton handleClick={handleNext}>
        <IoIosArrowForward className="text-xl" />
      </SliderButton>

      <Progress curIndex={currentSlideData.index} length={sliderData.length} />
    </div>
  );
}

export default Controls;

const SliderButton = ({ children, handleClick }: any) => {
  return (
    <button
      onClick={handleClick}
      className="flex justify-center items-center hover:bg-white border-[1px] border-gray-400 rounded-full w-14 h-14 hover:text-black transition duration-300 ease-in-out"
    >
      {children}
    </button>
  );
};

const Progress = ({ curIndex, length }: any) => {
  return (
    <>
      <div className="flex flex-1 items-center bg-white opacity-50 rounded-full h-[1px]">
        <div
          style={{
            width: (((curIndex + 1) / length) * 100).toString() + "%",
          }}
          className={`h-[1px] rounded-full bg-yellow-400 opacity-50`}
        ></div>
      </div>

      <span
        key={curIndex}
        style={{
          overflow: "hidden",
          display: "inline-block",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          key={curIndex}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="flex items-center font-medium text-4xl"
        >
          0{curIndex + 1}
        </motion.div>
      </span>
    </>
  );
};
