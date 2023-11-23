"use client";

import TextInput from "../TextInput";
import Link from "next/link";
import { useState, useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto h-full rounded bg-black px-[5%] py-[60px] pt-[40px] text-white sm:h-[660px] sm:w-[450px] sm:bg-[rgba(0,0,0,0.75)] sm:px-[68px]"
    >
      <h1 className="text-[2rem] font-medium">Sign In</h1>

      <div className="mt-4">
        <TextInput
          label={"Email or phone number"}
          variant="secondary"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <TextInput
          label={"Password"}
          variant="secondary"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="primary-btn mt-10 w-full py-3">Sign In</button>

      <div className="mt-4 flex text-[13px] text-[#b3b3b3]">
        <div className="flex-1 ">
          {/* <div className="flex items-center">
            <input
              className="relative mr-1 h-[18px] w-[18px] appearance-none rounded bg-white after:invisible after:absolute after:left-1/2 after:top-1/2 after:h-[10px] after:w-[10px] after:translate-x-[-50%] after:translate-y-[-50%] after:text-center after:leading-[10px]  after:text-black after:content-['✔'] checked:bg-[#8C8C8C] checked:after:visible"
              type="checkbox"
            />
            <span>Remember me</span>
          </div> */}
        </div>

        <Link href={"/"}>Need Help?</Link>
      </div>

      <div className="mt-20 text-[#737373]">
        <div className="text-[16px]">
          New to Netflix?{" "}
          <Link className="text-white hover:underline" href="/">
            Sign up now.
          </Link>
        </div>

        <p className="my-[13px] text-[13px]">
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a
          bot.
          <Link className="text-[#0071eb] hover:underline" href="/">
            Learn more.
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginModal;
