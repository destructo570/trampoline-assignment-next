import { Button } from "@/components/ui/button";
import React from "react";

const CalloutSection = () => {
  return (
    <section className="mt-14">
      <div className="text-center bg-[url(/images/image_4.png)] bg-[center] py-6 px-6">
        <h2 className="max-w-[582px] mx-auto ">
          Make Your Next Move the Easiest One Yet
        </h2>
        <p className="max-w-[582px] mx-auto text-[20px]">
          You launched your retail or design business to showcase creativity,
          offer distinctive products, and delight customers. Let Trampoline
          handle the heavy lifting - so you can focus on curating unique
          experiences
        </p>
        <p className="my-12 max-w-[400px] mx-auto text-[18px]">
          Now is the time to reclaim control over your inventory, delight your
          customers with unique pieces, and watch your profits grow—with zero
          hassle
        </p>
        <Button className="sm:text-2xl font-normal text-white bg-secondary-accent">
          Register & Access Exclusive Wholesale Décor Now
        </Button>
        <p className="text-sm mt-2">
          Join the community of savvy retailers and designers whoʼve made the
          switch.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-28 mt-16 p-8">
        <div>
          <h2 className="">Questions?</h2>
          <h2 className="">We would love to talk.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border px-4 py-2 rounded-lg flex flex-col justify-center">
            <p>Call our Trade Specialist</p>
            <h3>0800-XXXX-XXXX </h3>
          </div>
          <div className="border px-4 py-2 rounded-lg flex flex-col justify-center">
            <p>Email us at</p>
            <h3>support@trampoline-store.com</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalloutSection;
