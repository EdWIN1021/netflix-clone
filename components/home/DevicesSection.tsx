import React from "react";
import Container from "../Container";
import Image from "next/image";

const DevicesSection = () => {
  return (
    <Container>
      <div className="mx-auto flex max-w-[1250px] flex-col  text-center md:flex-row md:items-center md:text-left ">
        <div className="relative mx-auto w-[45vw]">
          <Image
            className="relative z-[10] w-full"
            src="/devices.png"
            alt=""
            width={500}
            height={500}
          />
          <video
            className="absolute left-[18%] top-[11%]  h-[48%]"
            autoPlay
            muted
            loop
          >
            <source src="/video-devices.m4v" type="video/webm" />
          </video>
        </div>

        <div className="max-w-[742px]">
          <h2 className="text-[2rem] font-bold lg:text-5xl">
            Watch everywhere
          </h2>
          <p className="pt-4 text-lg font-normal lg:text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default DevicesSection;
