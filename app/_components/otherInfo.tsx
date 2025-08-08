import React from "react";
import { Data } from "./main";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

function OtherInfo({ data }: { data: Data }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="flex flex-col"
      transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }}
    >
      <AnimatedText
        className="overflow-hidden text-gray-300 spacing"
        data={data.location}
      />
      <AnimatedText
        className="my-1 md:my-3 font-semibold text-4xl md:text-8xl md:leading-[100px]"
        data={data.title}
      />
      <AnimatedText className="text-gray-300 text-xs" data={data.description} />
    </motion.div>
  );
}

export default OtherInfo;

const AnimatedText = ({
  data,
  className,
}: {
  data?: string;
  className?: string;
}) => {
  return (
    <span style={{ overflow: "hidden", display: "inline-block" }}>
      <motion.p
        key={`${data}-${className}`}
        initial="hidden"
        animate="visible"
        variants={variants}
        className={className}
        transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }}
      >
        {data}
      </motion.p>
    </span>
  );
};
