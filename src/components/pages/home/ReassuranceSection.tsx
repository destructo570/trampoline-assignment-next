import { Button } from "@/components/ui/button";
import React from "react";

const ReassuranceSection = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-12 p-8">
      <div className="text-center sm:text-left sm:w-[50%]">
        <h2>Weʼve Got Your Back, Every Step of the Way.</h2>
        <p>
          Enjoy exceptional quality, flexible terms, exclusive products, and
          hassle-free logistics—every detail is designed to keep your business
          thriving.
        </p>
        <Button className="mt-8 bg-secondary-accent">
          Register to Explore Trampoline
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-[100%]">
        <div className="p-4 border-l-4 rounded-xl border-primary-accent">
          <h3>Worried About Quality?</h3>
          <p>
            Our on-ground QC teams in India inspect every product. Our detailed
            quality control process ensures that what you see is what you get.
          </p>
        </div>
        <div className="p-4 border-l-4 rounded-xl border-secondary-accent">
          <h3>Afraid of Large Investments?</h3>
          <p>
            We offer low or no MOQs and 30-day payment terms. Test new product
            lines with minimal risk.
          </p>
        </div>
        <div className="p-4 border-l-4 rounded-xl border-primary-accent">
          <h3>Need Unique Products?</h3>
          <p>
            Our collections let you brand products as your own, and we
            constantly update our catalog to follow the latest décor trends.
          </p>
        </div>
        <div className="p-4 border-l-4 rounded-xl border-secondary-accent">
          <h3>Is Hassle & Complex Logistics?</h3>
          <p>
            We have stock in the UK for quick delivery, manage the freight for
            you on factory orders, and even offer an easy return process if
            somethingʼs off.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReassuranceSection;
