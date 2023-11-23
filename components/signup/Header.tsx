"use client";

import Logo from "../Logo";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex w-full items-center border-b px-7 py-2">
      <div className="flex-1">
        <Logo width={167} height={65} />
      </div>

      {!currentUser && (
        <Link href={"/login"} className="text-[19px] font-medium">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Header;
