import Icon from "@/components/common/icon";
import { Button } from "@/components/ui/button";
import React from "react";

const CreateAccountSection = () => {
  return (
    <section className="bg-primary-accent flex flex-col items-center gap-8 mt-12 px-8 py-8 pb-6">
      <div className="text-center">
        <h2>No Confusion. No Headaches.</h2>
        <h2>Just a Straightforward 3-Step Process</h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 px-6 relative">
        <div className="flex bg-white border border-dashed border-black px-4 py-6 rounded-md sm:rounded-tl-3xl sm:rounded-bl-3xl rounded-tr-md rounded-br-md h-[264px] min-w-[378px]">
          <h2 className="pr-2">01</h2>
          <div className="flex flex-col gap-2 border-l border-black border-dashed px-2">
            <p className="uppercase font-[500] min-h-[48px] mt-2">
              Register for a Trade Account
            </p>
            <p className="text-[20px]">
              Tell us about your business—quickly and painlessly.{" "}
              <span className="text-primary-accent">Approval</span> is typically
              within 24 hours.
            </p>
          </div>
        </div>
        <div className="flex bg-white border border-dashed border-black px-4 py-6 rounded-md h-[264px] min-w-[378px]">
          <h2 className="pr-2">02</h2>
          <div className="flex flex-col gap-2 border-l border-black border-dashed px-2">
            <p className="uppercase font-[500] min-h-[48px] mt-2">
              {" "}
              Browse Curated Décor & Place Your Order
            </p>
            <p className="text-[20px]">
              Choose from our{" "}
              <span className="text-sky-blue">curated collections</span> of
              furniture, rugs, wall accents, and more.
            </p>
          </div>
        </div>
        <div className="flex bg-white border border-dashed border-black px-4 py-6 rounded-md rounded-tl-md rounded-bl-md sm:rounded-tr-3xl sm:rounded-br-3xl h-[264px] min-w-[378px]">
          <h2 className="pr-2">03</h2>
          <div className="flex flex-col gap-2 border-l border-black border-dashed px-2">
            <p className="uppercase font-[500] min-h-[48px] mt-2">
              Receive Fast Delivery & Support
            </p>
            <p className="text-[20px]">
              We manage{" "}
              <span className="text-green">
                quality, logistics, and updates
              </span>
              —so you can focus on your customers, backed by Trampoline.
            </p>
          </div>
        </div>
        <div className="bg-white border-6 border-primary-accent rounded-full p-3 absolute left-[180px] top-[240px] rotate-90 sm:rotate-0 sm:left-[378px] sm:top-[180px]">
          <Icon src="/icons/arrow-right.svg" width={24} height={24} />
        </div>
        <div className="bg-white border-6 border-primary-accent rounded-full p-3 absolute left-[180px] top-[520px] rotate-90 sm:left-[772px] sm:rotate-0 sm:top-[180px]">
          <Icon src="/icons/arrow-right.svg" width={24} height={24} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Button className="bg-secondary-accent">Create My Free Account</Button>
        <p className="mt-2">Easy signup process. Get browsing in minutes!</p>
      </div>
    </section>
  );
};

export default CreateAccountSection;
