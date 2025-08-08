import React from "react";
import { Data } from "./main";
import { motion } from "framer-motion";

function SliderCard({ data }: { data: Data }) {
  return (
    <motion.div
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.4 },
      }}
      exit={{
        scale: 0.8,
        opacity: 0,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      className="relative shadow-md rounded-xl min-w-[250px] md:min-w-[250px] h-52 md:h-80"
    >
      <motion.img
        layoutId={data.img}
        src={data.img}
        className="absolute brightness-75 rounded-2xl w-full h-full object-cover"
      />

      <motion.div className="z-10 absolute flex items-end p-4 h-full">
        <motion.div>
          <motion.div
            layout
            className="bg-white mb-2 rounded-full w-3 h-[2px]"
          ></motion.div>

          <motion.p className="text-gray-400 text-xs" layoutId={data.location}>
            {data.location}
          </motion.p>

          <motion.h1
            layoutId={data.title}
            className="text-white text-xl leading-6"
          >
            {data.title}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SliderCard;
