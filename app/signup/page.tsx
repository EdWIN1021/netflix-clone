import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <div className="mx-auto flex max-w-[340px] flex-1 flex-col items-center justify-center text-center">
        <Image
          className="mb-[20px]"
          src="/signup/devices.png"
          width={260}
          height={90}
          alt="devices"
        />
        <p>STEP 1 OF 3</p>
        <h2 className="text-[32px]">Finish setting up your account</h2>
        <p className="text-[18px]">
          Netflix is personalized for you. Create a password to start watching
          Netflix.
        </p>

        <button className="mt-6 w-full rounded bg-[rgb(229,9,20)] px-12 py-5 text-[24px] text-white">
          Next
        </button>
      </div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
    </div>
  );
};

export default page;
