"use client";

import { useRouter } from "next/navigation";
import TextInput from "../TextInput";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const GetStartedForm = () => {
  const router = useRouter();

  const [inputField, setInputField] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    sessionStorage.setItem("email", inputField);
    router.push("/signup");
  };

  useEffect(() => {
    setInputField(sessionStorage.getItem("email") || "");
  }, []);

  return (
    <form
      className="mt-6 px-6 text-center text-[#fff] sm:mx-auto sm:max-w-3xl"
      onSubmit={handleSubmit}
    >
      <h3 className="mb-8 text-lg font-normal lg:text-xl">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>

      <div className="flex flex-col items-center sm:flex-row">
        <div className="mr-2 w-full">
          <TextInput
            label={"Email address"}
            id="email"
            variant="primary"
            value={inputField}
            onChange={(e) => setInputField(e.target.value)}
            type="email"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-3 whitespace-nowrap rounded bg-[rgb(229,9,20)] px-4  py-3.5 text-lg font-medium text-[#fff] hover:bg-[rgb(193,17,25)] active:bg-[rgb(153,22,29)] sm:mt-0"
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
