import InfoPanel from "@/components/common/info-panel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const FeatureSection = () => {
  return (
    <section className="mt-10">
      <div className="flex flex-col sm:flex-row gap-2">
        <h2 className="text-center sm:text-left">
          A Sourcing Partner That Works the Way You Do.
        </h2>
        <div className="hidden sm:block border-t-2 w-[100%] border-primary-accent mt-6"></div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-start items-center gap-8 mt-12">
        <div>
          <InfoPanel
            title="Freedom from High MOQs"
            description="Purchase only a handful of pieces—or an entire  container—on your own terms. Perfect for independent retailers who donʼt  want to tie up capital in slow-moving inventory."
            iconSrc="/icons/home_2.svg"
            size="large"
          />
          <InfoPanel
            title="Manufacturer-Direct Pricing"
            description="Enjoy the pricing benefits of going directly to  factories—without the overhead or logistical complexity of overseas sourcing."
            iconSrc="/icons/manufacture.svg"
            size="large"
          />
          <InfoPanel
            title="Exclusive, Trend-Led Designs"
            description="White-label options, from on-trend categories.  Differentiate your store from the big-box crowd."
            iconSrc="/icons/blocks.svg"
            size="large"
          />
        </div>
        <div className="flex flex-col gap-8 min-w-[327px]">
          <Image src={"/images/image_2.png"} height={489} width={327} alt="" />
          <Button className="bg-secondary-accent">
            Register & Explore our Trade Prices
          </Button>
        </div>
        <div>
          <InfoPanel
            title=" Online EasySource Platform"
            description="Why go through tedious PDF catalogues?  Easily buy from a platform that shows products as your customers would see  them. "
            iconSrc="/icons/globe.svg"
            size="large"
            rowReverse
          />
          <InfoPanel
            title=" Flexible, Extended Payment Terms"
            description="Friendly credit and cash-flow flexibility,  because we know how important predictability is for small businesses."
            iconSrc="/icons/bank.svg"
            size="large"
            rowReverse
          />
          <InfoPanel
            title="Quality You Can Count On"
            description="On-ground QC teams, detailed inspection reports,  and easy returns if anything falls short."
            iconSrc="/icons/badge.svg"
            size="large"
            rowReverse
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
