import React from "react";
import priceg from "../assets/Pointer.png";
import pricep from "../assets/Pointerg.png";

const Prising = () => {
  return (
    <section className="pt-55 pb-32 flex flex-col gap-16 items-center">
      <div className="flex flex-col gap-4 items-center max-w-[562px] text-center">
        <h2 className="font-semibold text-5xl text-[#282938]">
          Our Pricing Plans
        </h2>
        <p className="text-[#282938] opacity-70">
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="max-w-[406px] bg-[#F4F6FC] rounded-xl px-12 py-16 flex flex-col">
          <div className="flex items-center gap-2">
            <p className="text-[#282938] text-3xl font-semibold">$299</p>
            <p className="text-[#2405F2]">Per Design</p>
          </div>
          <p className="text-[#282938] text-2xl mt-9">Landing Page</p>
          <p className="mt-2 text-[#282938] opacity-70">
            Get your landing page designed with modern UI/UX principles.
          </p>

          <div className="my-16 flex flex-col gap-5">
            <Feature text="All limited links" img={priceg} />
            <Feature text="Own analytics platform" img={priceg} />
            <Feature text="Chat support" img={priceg} />
            <Feature text="Optimize hashtags" img={pricep} />
            <Feature text="Unlimited users" img={pricep} />
          </div>

          <button className="py-4 px-10 bg-[#282938] text-white rounded-full">
            Get started
          </button>
        </div>

        <div className="max-w-[406px] bg-[#1C1E53] rounded-xl px-12 py-16 flex flex-col text-white">
          <div className="flex items-center gap-2">
            <p className="text-3xl font-semibold">$399</p>
            <p className="text-[#FCD980]">Multi Design</p>
          </div>
          <p className="text-2xl mt-9">Website Page</p>
          <p className="mt-2 opacity-70">
            When you’re ready to go beyond prototyping in Figma, Webflow’s ready
            to help.
          </p>

          <div className="mb-16 mt-12 flex flex-col gap-5">
            <Feature text="All limited links" img={priceg} dark />
            <Feature text="Own analytics platform" img={priceg} dark />
            <Feature text="Chat support" img={priceg} dark />
            <Feature text="Optimize hashtags" img={priceg} dark />
            <Feature text="Unlimited users" img={priceg} dark />
          </div>

          <button className="py-4 px-10 bg-[#FCD980] text-[#1C1E53] rounded-full">
            Get started
          </button>
        </div>

        <div className="max-w-[406px] bg-[#F4F6FC] rounded-xl px-12 py-16 flex flex-col">
          <div className="flex items-center gap-2">
            <p className="text-[#282938] text-3xl font-semibold">$499</p>
            <p className="text-[#2405F2]">Per Month</p>
          </div>
          <p className="text-[#282938] text-2xl mt-9">E-commerce</p>
          <p className="mt-2 text-[#282938] opacity-70">
            Full-featured online store setup with payment gateway integration.
          </p>

          <div className="mb-14 mt-11 flex flex-col gap-5">
            <Feature text="All limited links" img={priceg} />
            <Feature text="Own analytics platform" img={priceg} />
            <Feature text="Chat support" img={priceg} />
            <Feature text="Optimize hashtags" img={priceg} />
            <Feature text="Unlimited users" img={priceg} />
            <Feature text="Assist and Help" img={priceg} />
          </div>

          <button className="py-4 px-10 bg-[#282938] text-white rounded-full">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ text, img, dark }) => (
  <div className="flex gap-3 items-center">
    <img src={img} alt="Pointer Graphic" />
    <p className={dark ? "text-white" : "text-[#282938]"}>{text}</p>
  </div>
);

export default Prising;
