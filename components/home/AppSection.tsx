import React from "react";
import Container from "../Container";
import Image from "next/image";

const APPSection = () => {
  return (
    <Container>
      <div className="mx-auto flex max-w-[1250px] flex-col text-center md:flex-row-reverse md:items-center md:text-left">
        <div>
          <h2 className="text-[2rem] font-bold lg:text-5xl">
            Download your shows to watch offline
          </h2>
          <p className="pt-4 text-lg font-normal lg:text-2xl">
            Watch on a plane, train, or submarine...
          </p>
        </div>

        <div className="relative mx-auto max-w-xl">
          <Image
            className="w-[60vw]"
            src="/mobile.jpg"
            alt="phone"
            width={500}
            height={500}
          />

          <div className="absolute left-[50%] top-[80%] flex h-[22%] w-[55%] translate-x-[-50%] translate-y-[-50%]  items-center rounded-xl  border-2 border-solid border-[rgb(128,128,128)] bg-black p-2 shadow-[0_0_2rem_0_rgb(0,0,0)]">
            <Image
              className="mr-4 w-[3.5vw]"
              src="/boxshot.png"
              alt=""
              width={500}
              height={500}
            />

            <div className="flex-1">
              <div className="text-start">
                <div>Stranger Things</div>
                <div className="text-[#0071eb]">Downloading...</div>
              </div>
            </div>

            <Image
              className="h-full w-[5vw]"
              src="/download.gif"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default APPSection;
