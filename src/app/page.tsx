import Icon from "@/components/common/icon";
import IconCard from "@/components/common/icon-card";
import InfoPanel from "@/components/common/info-panel";
import TestimonialCard from "@/components/common/testimonial-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const heroSection = () => {
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

  const registerSection = () => {
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
              Trampoline was built to give you freedom from large financial
              risks, guesswork, and inventory headaches:
            </p>
          </div>
          <div className="mt-16 ml-4 flex flex-col gap-2">
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
        <div>Form Goes Here</div>
      </section>
    );
  };

  const featuresSection = () => {
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
            <Image
              src={"/images/image_2.png"}
              height={489}
              width={327}
              alt=""
            />
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

  const testimonials = () => {
    return (
      <section className="text-center mt-14 p-4">
        <section>
          <div>
            <h2>
              A Supplier That Has Your Back—So You Can Focus on What You Love.
            </h2>
            <p>
              {" "}
              We believe that independent retailers and interior designers
              deserve the same level of care, support, and pricing thatʼs
              typically reserved for big-box chains. Youʼve got the vision;
              weʼve got the resources and expertise to make it happen. Our
              dedicated sales agents, including industry veterans, are always on
              hand to help you choose the perfect pieces and navigate any
              challenges.
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
        <section className="bg-secondary-accent text-white flex flex-col items-center gap-8 mt-12 p-4 border-b-8 border-primary-accent">
          <h2>Why Customers Keep Coming Back</h2>
          <div className="flex flex-col sm:flex-row">
            <div className="py-4 px-8 sm:border-r border-secondary-surface border-dashed">
              <h2>95%</h2>
              <p className="max-w-[220px]">
                of first-time buyers reorder within 2 months
              </p>
            </div>
            <div className="py-4 px-8 sm:border-r border-secondary-surface border-dashed">
              <h2>1,000+</h2>
              <p className="max-w-[220px]">
                on-trend designs available across furniture, rugs, and décor
              </p>
            </div>
            <div className="py-4 px-8">
              <h2>2-5 day</h2>
              <p className="max-w-[220px]">
                UK shipping from local warehouses.
              </p>
            </div>
          </div>
        </section>
      </section>
    );
  };

  const reassuranceSection = () => {
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
              Our on-ground QC teams in India inspect every product. Our
              detailed quality control process ensures that what you see is what
              you get.
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
  const promotionSection = () => {
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
          className="sm:w-[50%]"
        />
      </section>
    );
  };

  const faqSection = () => {
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
            <AccordionTrigger>
              Is there a huge sign-up process?ˮ
            </AccordionTrigger>
            <AccordionContent>
              We have on-ground QC teams ensuring quality. In rare cases of
              damage, our hassle-free returns policy covers you.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    );
  };

  const callOutAndContactSection = () => {
    return (
      <section className="">
        <div className="text-center bg-[url(/images/image_4.png)] bg-[center] py-6 px-6">
          <h2 className="max-w-[582px] mx-auto ">
            Make Your Next Move the Easiest One Yet
          </h2>
          <p className="max-w-[582px] mx-auto ">
            You launched your retail or design business to showcase creativity,
            offer distinctive products, and delight customers. Let Trampoline
            handle the heavy lifting - so you can focus on curating unique
            experiences
          </p>
          <p className="my-12 max-w-[400px] mx-auto">
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

  const createAccountSection = () => {
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
                <span className="text-primary-accent">Approval</span> is
                typically within 24 hours.
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
          <Button className="bg-secondary-accent">
            Create My Free Account
          </Button>
          <p className="mt-2">Easy signup process. Get browsing in minutes!</p>
        </div>
      </section>
    );
  };

  return (
    <section className="max-w-[1200px] mx-auto">
      {heroSection()}
      {registerSection()}
      {featuresSection()}
      {createAccountSection()}
      {testimonials()}
      {reassuranceSection()}
      {promotionSection()}
      {faqSection()}
      {callOutAndContactSection()}
    </section>
  );
}
