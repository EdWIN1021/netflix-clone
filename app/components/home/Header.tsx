"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DropDown from "../DropDown";
import Image from "next/image";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex h-[5rem] max-w-[1250px] items-center p-10 lg:mx-auto">
      <Link className="h-[1.5rem] flex-1 self-center sm:h-[2.5rem]" href={"/"}>
        <Image
          className="h-full w-[9.25rem] flex-1"
          src="/home/logo.svg"
          alt=""
          width={148}
          height={40}
        />
      </Link>

      <DropDown />

      <button
        className="btn-primary px-4 py-1 text-sm font-medium"
        onClick={() => router.push("/login")}
      >
        Sign In
      </button>
    </div>
  );
};

export default Header;
