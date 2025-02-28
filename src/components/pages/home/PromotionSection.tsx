import Icon from "@/components/common/icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const PromotionSection = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-14 mt-16 p-8">
      <div>
        <h2>
          Ready to Transform Your Inventory? Take the Leap With Zero Risk.
        </h2>
        <div className="flex flex-col gap-8 mt-16 mb-12">
          <div className="flex gap-4 items-start">
            <Icon src="/icons/check_square.svg" width={24} height={24} />
            <p>
              As a first-time buyer, enjoy £100 off your first order (Above
              £500). Get the flexibility you need to test our quality and see
              your customersʼ reactions.
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <Icon src="/icons/check_square.svg" width={24} height={24} />
            <p>
              No Minimum Order Value on Your First Purchase: Test the waters
              without committing to large shipments.
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <Icon src="/icons/check_square.svg" width={24} height={24} />
            <p>Flexible 30-Day Payment Terms on all initial orders.</p>
          </div>
        </div>
        <Button className="bg-secondary-accent">
          Claim My £100 Off & Register Now
        </Button>
      </div>
      <Image
        src="/images/image_3.png"
        width={722}
        height={408}
        alt=""
        className="self-start sm:w-[55%]"
      />
    </section>
  );
};

export default PromotionSection;
