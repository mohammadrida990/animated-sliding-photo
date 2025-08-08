import React from "react";
import { CurrentSlideData, Data } from "./main";
import { motion } from "framer-motion";
import OtherInfo from "./otherInfo";
import { IoMdBookmark } from "react-icons/io";

function SlideInfo({
  currentSlideData,
  transitionData,
}: {
  currentSlideData: CurrentSlideData;
  transitionData: Data;
}) {
  return (
    <>
      <motion.span layout className="bg-white mb-2 rounded-full w-5 h-1" />

      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />

      <motion.div layout className="flex items-center gap-3 mt-5">
        <button className="flex justify-center items-center bg-yellow-500 hover:opacity-80 rounded-full w-[40px] h-[40px] text-xs transition duration-300 ease-in-out">
          <IoMdBookmark className="text-xl" />
        </button>

        <button className="hover:bg-white px-6 border-[1px] border-gray-400 rounded-full w-fit font-thin hover:text-black text-xs transition duration-300 ease-in-out">
          Discover location
        </button>
      </motion.div>
    </>
  );
}

export default SlideInfo;
