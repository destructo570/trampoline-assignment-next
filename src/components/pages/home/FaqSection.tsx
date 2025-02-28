import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="mt-10 p-8">
      <h2 className="text-center">FAQs.</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-4 mt-8"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-medium">
            What if my items arrive damaged?
          </AccordionTrigger>
          <AccordionContent>
            We have on-ground QC teams ensuring quality. In rare cases of
            damage, our hassle-free returns policy covers you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How fast do I actually receive my orders?
          </AccordionTrigger>
          <AccordionContent>
            We have on-ground QC teams ensuring quality. In rare cases of
            damage, our hassle-free returns policy covers you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is there a huge sign-up process?ˮ</AccordionTrigger>
          <AccordionContent>
            We have on-ground QC teams ensuring quality. In rare cases of
            damage, our hassle-free returns policy covers you.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FaqSection;
