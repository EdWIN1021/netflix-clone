"use client";

import React, { Dispatch, SetStateAction, useContext } from "react";
import { PencilSquareIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "@/providers/AuthProvider";

const Menu: React.FC<{ toggle: Dispatch<SetStateAction<boolean>> }> = ({
  toggle,
}) => {
  const { signOut } = useContext(AuthContext);

  return (
    <div
      className="absolute right-0 top-[150%] w-[220px] border border-[rgba(255,255,255,0.15)] bg-[rgba(0,0,0,0.9)] before:absolute before:right-[15%] before:top-[-25px] before:border-b-[8px] before:border-l-[10px] before:border-r-[10px] before:border-b-[rgba(299,299,299)] before:border-l-transparent before:border-r-transparent before:pt-4 before:content-['']"
      onMouseOver={() => toggle(true)}
    >
      <ul>
        <li className="flex items-center gap-2  px-3 pb-3 pt-5">
          <PencilSquareIcon className="w-5" />
          <span>Manage Profiles</span>
        </li>

        <li className="flex items-center gap-2 px-3 py-2">
          <UserCircleIcon className="w-5" />
          <span>Account</span>
        </li>
      </ul>

      <button
        className="mt-2 w-full border-t border-[rgba(255,255,255,0.15)] px-5 py-4"
        onClick={signOut}
      >
        Sign out of Netflix
      </button>
    </div>
  );
};

export default Menu;
