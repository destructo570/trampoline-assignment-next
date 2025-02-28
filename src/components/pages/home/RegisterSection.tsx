import InfoPanel from "@/components/common/info-panel";
import React from "react";
import RegistrationForm from "./RegistrationForm";

const RegisterSection = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-8 p-8">
      <div className="sm:max-w-[50%] ">
        <div>
          <h2 className="text-center sm:text-left">
            Sourcing Struggles Are Real.
          </h2>
          <p className="text-center sm:text-left">
            {" "}
            As an independent retailer or interior designer, you wear a dozen
            hats—buyer, marketer, merchandiser, creative director. You donʼt
            have time for complex sourcing, huge MOQs, or subpar products.
            Trampoline was built to give you freedom from large financial risks,
            guesswork, and inventory headaches:
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-2">
          <InfoPanel
            title="High MOQs & Expensive Inventory"
            description="Youʼve been forced to order in large  quantities, tying up cash flow in unsold stock."
            iconSrc="/icons/home.svg"
            isActive
          />
          <InfoPanel
            title=" Limited Access to Exclusive Designs"
            iconSrc="/icons/no_access_block.svg"
          />
          <InfoPanel
            title="Logistical Nightmares"
            iconSrc="/icons/product_stack.svg"
          />
          <InfoPanel
            title="Uncertain Quality & Hidden Risks"
            iconSrc="/icons/warning.svg"
          />
        </div>
      </div>
      <RegistrationForm />
    </section>
  );
};

export default RegisterSection;
