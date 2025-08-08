"use client";

import React from "react";
import Header from "./header";
import BackgroundImage from "./nackgroundImage";
import SlideInfo from "./slideInfo";
import Slides from "./slides";
import Controls from "./controls";

export type Data = {
  id: string;
  title: string;
  description: string;
  img: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

function Main() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );

  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main className="relative min-h-screen overflow-hidden text-white antialiased select-none">
      <BackgroundImage
        transitionData={transitionData}
        currentSlideData={currentSlideData}
      />

      <div className="z-20 absolute w-full h-full">
        <Header />

        <div className="flex flex-col md:grid grid-cols-10 w-full h-full">
          <div className="flex flex-col flex-1 justify-end md:justify-center col-span-4 mb-3 md:mb-0 px-5 md:px-10 h-full">
            <SlideInfo
              transitionData={transitionData}
              currentSlideData={currentSlideData}
            />
          </div>

          <div className="flex flex-col flex-1 justify-start md:justify-center col-span-6 p-4 md:p-10 h-full">
            <Slides data={data} />

            <Controls
              data={data}
              currentSlideData={currentSlideData}
              transitionData={transitionData}
              initData={initData}
              handleData={setData}
              handleTransitionData={setTransitionData}
              handleCurrentSlideData={setCurrentSlideData}
              sliderData={sliderData}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

const sliderData: Data[] = [
  {
    id: "1",
    title: "Slide 1",
    description: "Description for Slide 1",
    img: "/assets/b1.jpg",
    location: "Location 1",
  },
  {
    id: "2",
    title: "Slide 2",
    description: "Description for Slide 2",
    img: "/assets/b2.jpg",
    location: "Location 2",
  },
  {
    id: "3",
    title: "Slide 3",
    description: "Description for Slide 3",
    img: "/assets/b3.jpg",
    location: "Location 3",
  },
  {
    id: "4",
    title: "Slide 4",
    description: "Description for Slide 4",
    img: "/assets/b4.jpg",
    location: "Location 4",
  },
  {
    id: "5",
    title: "Slide 5",
    description: "Description for Slide 5",
    img: "/assets/b5.jpg",
    location: "Location 5",
  },
  {
    id: "6",
    title: "Slide 6",
    description: "Description for Slide 6",
    img: "/assets/b6.jpg",
    location: "Location 6",
  },
  {
    id: "7",
    title: "Slide 7",
    description: "Description for Slide 7",
    img: "/assets/b7.jpg",
    location: "Location 7",
  },
];

const initData = sliderData[0];
