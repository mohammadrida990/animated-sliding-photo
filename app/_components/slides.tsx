import React from "react";
import { Data } from "./main";
import SliderCard from "./sliderCard";

function Slides({ data }: { data: Data[] }) {
  return (
    <div className="flex gap-6 w-full">
      {data.map((d) => (
        <SliderCard key={d.img} data={d} />
      ))}
    </div>
  );
}

export default Slides;
