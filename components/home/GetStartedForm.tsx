"use client";

import { useRouter } from "next/navigation";
import TextInput from "../TextInput";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const GetStartedForm = () => {
  const router = useRouter();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push("/signup");
  };

  return (
    <form
      className="mt-6 px-6 text-center text-[#fff] sm:mx-auto sm:max-w-3xl"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-normal lg:text-xl">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>

      <div className="justify-center sm:flex">
        <div className="mr-2 w-full">
          <TextInput label={"Email address"} primary />
        </div>
        <button
          type="submit"
          className="mt-4 whitespace-nowrap rounded bg-[rgb(229,9,20)]  px-4 py-2 text-lg font-medium text-[#fff] hover:bg-[rgb(193,17,25)] active:bg-[rgb(153,22,29)]"
        >
          <div className="flex items-center">
            <span>Get Started</span>
            <ChevronRightIcon className="w-[25px]" />
          </div>
        </button>
      </div>
    </form>
  );
};

export default GetStartedForm;
