import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { signUpFooterLinks as links } from "../../constants";

const page = () => {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <div className="center-x-y mx-auto max-w-[340px]  flex-1 text-center">
        <Image
          className="mb-5"
          src="/signup/devices.png"
          width={260}
          height={90}
          alt="devices"
        />
        <p className="text-xs">STEP 1 OF 3</p>
        <h2 className="text-3xl">Finish setting up your account</h2>
        <p className="text-lg">
          Netflix is personalized for you. Create a password to start watching
          Netflix.
        </p>

        <button className="primary-btn mt-6 w-full px-12 py-5 text-2xl text-white">
          Next
        </button>
      </div>
      <Footer
        links={links}
        bgColor="#F3F3F3"
        fontColor="#737373"
        type="small"
      />
    </div>
  );
};

export default page;
