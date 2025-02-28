"use client";
import Icon from "@/components/common/icon";
import Image from "next/image";
import React, { useState } from "react";

const AnalyticsSection = () => {
  const [roomCardData] = useState([
    {
      img: "/images/image_5.png",
      title: "Mirrors",
      sub_title: "Avg. Retail Margin: 35%",
    },
    { img: "/images/image_6.png", title: "Rugs", sub_title: "ARM: 45%+" },
    { img: "/images/image_7.png", title: "Furnitures", sub_title: "ARM: 65%+" },
    {
      img: "/images/image_8.png",
      title: "Cushion & Throws",
      sub_title: "ARM: 40%+",
    },
  ]);

  return (
    <div className="mt-12">
      <div className="text-center">
        <h2>See the Difference Trend-Driven Designs Can Make.</h2>
        <p>
          Explore our curated selection of bestsellers and discover your margin
          potential.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 mt-12">
        <div className="grid grid-cols-2 gap-6 px-8">
          {roomCardData.map((data, index) => {
            return (
              <div className="max-w-[291px]" key={`roomdata_${index}`}>
                <div className="relative">
                  <Image src={data.img} alt="" width={291} height={199} />
                  <div className="bg-light-green top-[8px] absolute right-[8px] rounded-sm px-1">
                    {data.sub_title}
                  </div>
                </div>
                <p className="text-[20px] font-[500]">{data.title}</p>
              </div>
            );
          })}
        </div>
        <div className="sm:w-[50%] px-8">
          <div className="border border-surface-border rounded-md min-h-[400px]">
            <p className="px-4 py-2 border-b font-[500]">
              Retailer Price Breakdown for Furniture
            </p>
            <div className="px-4 py-2 flex gap-6 justify-between">
              <div className="flex flex-col gap-4">
                <div className="bg-surface-light w-[166px] rounded-md px-4 py-2 flex items-end justify-between">
                  <div>
                    <p className="font-[500]">Price to buy</p>
                    <p className="font-[500] text-2xl">£50</p>
                  </div>
                  <div className="rounded-full w-[15px] h-[15px] bg-surface-dark"></div>
                </div>
                <div className="bg-surface-light w-[166px] rounded-md  px-4 py-2  flex items-end justify-between">
                  <div>
                    <p className="font-[500]">Price to buy</p>
                    <p className="font-[500] text-2xl">£82.5</p>
                  </div>
                  <div className="rounded-full  w-[15px] h-[15px] bg-light-green"></div>
                </div>
                <p className="bg-light-green p-1">ARM: 65%+</p>
              </div>
              <div className="mt-22">
                <Icon src="/icons/chart.svg" width={300} height={600} />
              </div>
            </div>
          </div>
          <p className="mt-6">
            Whether you want a laid-back boho vibe, sleek industrial edge, or
            cozy Japandi minimalism, Trampoline has you covered—without the
            massive minimums
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
