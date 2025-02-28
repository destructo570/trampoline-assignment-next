import IconCard from "@/components/common/icon-card";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-8 p-8">
      <Image
        height={636}
        width={353}
        alt=""
        src={"/images/image_1.png"}
        className="min-w-[100%] sm:min-w-[50%] object-cover"
      />
      <div className="">
        <div>
          <h2 className={"text-center sm:text-left"}>
            The Easiest Way to Buy Wholesale Home Décor.
          </h2>
          <p className="text-center sm:text-left">
            Tailored for Independent Retailers & Designers.
          </p>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <IconCard title={"100% Quality Assurance"}>
            <Image src={"/icons/check.svg"} height={32} width={32} alt="" />
          </IconCard>
          <IconCard title={"No Large Commitments"}>
            <Image
              src={"/icons/heart_sparkle.svg"}
              height={32}
              width={32}
              alt=""
            />
          </IconCard>
          <IconCard title={"Online EasySource Platform"}>
            <Image src={"/icons/buy.svg"} height={32} width={32} alt="" />
          </IconCard>
          <IconCard title={"Trend-Led Collections"}>
            <Image
              src={"/icons/trend_card.svg"}
              height={32}
              width={32}
              alt=""
            />
          </IconCard>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
