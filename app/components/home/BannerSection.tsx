import React from "react";
import Overlay from "../Overlay";
import Header from "./Header";
import GetStartedForm from "./GetStartedForm";

const BannerSection = () => {
  return (
    <section
      className="w-full bg-cover"
      style={{
        backgroundImage: `url('/bg.jpg')`,
      }}
    >
      <Overlay>
        <Header />
        <div className="px-8 py-[7.5rem] text-white">
          <div className="text-center">
            <h1 className="text-[2rem] font-bold sm:font-black md:text-[3rem]">
              Unlimited movies, TV shows, and more
            </h1>

            <p className="mt-4 text-lg font-normal md:text-2xl">
              Watch anywhere. Cancel anytime.
            </p>
          </div>
          <div className="pb-16">
            <GetStartedForm />
          </div>
        </div>
      </Overlay>
    </section>
  );
};

export default BannerSection;
