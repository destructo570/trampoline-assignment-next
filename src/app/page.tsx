import IconCard from "@/components/common/icon-card";
import InfoPanel from "@/components/common/info-panel";
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
  return (
    <section className="max-w-[1200px] mx-auto">
      {heroSection()}
      {registerSection()}
    </section>
  );
}
