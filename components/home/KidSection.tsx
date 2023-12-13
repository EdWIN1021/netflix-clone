import React from "react";
import Container from "../Container";
import Image from "next/image";

const KidSection = () => {
  return (
    <Container>
      <div className="mx-auto flex max-w-[1250px] flex-col text-center md:flex-row-reverse md:items-center md:text-left">
        <Image
          className="self-center md:w-[40%]"
          src="/kids.png"
          alt=""
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-[2rem] font-bold lg:text-5xl">
            Create profiles for kids
          </h2>
          <p className="max-w-[930px] pt-4 text-lg font-normal lg:text-2xl">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default KidSection;
