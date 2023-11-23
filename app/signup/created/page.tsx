"use client";

import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-10 flex justify-center">
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
    </div>
  );
};

export default Page;
