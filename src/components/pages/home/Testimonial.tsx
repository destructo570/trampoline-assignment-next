import TestimonialCard from "@/components/common/testimonial-card";
import React from "react";

const Testimonial = () => {
  return (
    <section className="text-center mt-14 p-4">
      <section>
        <div className="sm:w-[580px] mx-auto">
          <h2>
            A Supplier That Has Your Back—So You Can Focus on What You Love.
          </h2>
          <p>
            {" "}
            We believe that independent retailers and interior designers deserve
            the same level of care, support, and pricing thatʼs typically
            reserved for big-box chains. Youʼve got the vision; weʼve got the
            resources and expertise to make it happen. Our dedicated sales
            agents, including industry veterans, are always on hand to help you
            choose the perfect pieces and navigate any challenges.
          </p>
        </div>
        <div className="flex gap-4 mt-10 flex-col sm:flex-row justify-center">
          <TestimonialCard
            testimonial="“Trampoline saved our small boutique thousands. We finally  have unique, on-trend pieces that we can order in just the right  quantities. No more dead stock!ˮ"
            name="Emily R."
            place="Boutique Owner, London"
          />
          <TestimonialCard
            testimonial="“I used to spend weeks chasing suppliers overseas. Now,  Trampoline handles everything—quality checks, shipping, even  flexible payments. Itʼs been a game-changer.ˮ"
            name="Emily R."
            place="Boutique Owner, London"
          />
        </div>
      </section>
      <section className="bg-secondary-accent text-white flex flex-col items-center gap-8 mt-12 px-4 pt-8 pb-14 border-b-8 border-primary-accent">
        <h2>Why Customers Keep Coming Back</h2>
        <div className="flex flex-col sm:flex-row">
          <div className="py-4 px-8 sm:border-r border-secondary-surface border-dashed">
            <p className="text-[50px]">95%</p>
            <p className="max-w-[220px] text-[20px]">
              of first-time buyers reorder within 2 months
            </p>
          </div>
          <div className="py-4 px-8 sm:border-r border-secondary-surface border-dashed">
            <p className="text-[50px]">1,000+</p>
            <p className="max-w-[220px] text-[20px]">
              on-trend designs available across furniture, rugs, and décor
            </p>
          </div>
          <div className="py-4 px-8">
            <p className="text-[50px]">2-5 day</p>
            <p className="max-w-[220px] text-[20px]">UK shipping from local warehouses.</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
