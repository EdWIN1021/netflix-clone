import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";
import { signUpFooterLinks as links } from "../../../constants";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-10 flex h-full flex-1 justify-center">
        <div className="flex w-[440px] flex-col">
          <h2 className="mb-3 text-[32px] font-medium">Account Created</h2>
          <p className=" text-[16px]">Use this email to access your account:</p>
          <p className="my-12 text-center font-medium">
            {"asdasd@asdasda.com"}
          </p>

          <Link
            href={"/browse"}
            className="primary-btn w-full px-12 py-5 text-center text-2xl text-white"
          >
            Next
          </Link>
        </div>
      </div>
      <Footer links={links} />
    </div>
  );
};

export default page;
