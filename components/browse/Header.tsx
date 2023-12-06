"use client";

import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BellIcon,
  MagnifyingGlassIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";
import clsx from "clsx";

import { AuthContext } from "@/providers/AuthProvider";
import Menu from "../Menu";

const links = [
  { id: 1, title: "Home", path: "/browse" },
  { id: 2, title: "TV Shows", path: "/browse/tv-shows" },
  { id: 3, title: "Movies", path: "/browse/movies" },
  { id: 4, title: "New & Popular", path: "/browse/new-popular" },
  { id: 5, title: "My List", path: "/browse/my-list" },
  { id: 6, title: "Browse by Languages", path: "/browse/languages" },
];

const Header = () => {
  const pathname = usePathname();
  const [open, toggle] = useState(false);
  const { signOut } = useContext(AuthContext);

  return (
    <div className="sticky top-0 flex items-center py-4 text-sm">
      <Image
        className="cursor-pointer"
        src="/logo.svg"
        width={92.5}
        height={30}
        alt=""
        priority
      />

      <ul className="ml-12 flex flex-1 gap-5">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              className={clsx(
                "rounded  transition duration-200 hover:text-[#b3b3b3]",
                {
                  "font-bold": pathname === link.path,
                },
              )}
              href={"/"}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <MagnifyingGlassIcon className="w-5 cursor-pointer" />
        <BellIcon className="w-5 cursor-pointer" />

        <div
          className="group relative flex cursor-pointer"
          onMouseEnter={() => toggle(true)}
          onMouseLeave={() => toggle(false)}
        >
          <Image
            className="rounded"
            src="/browse/avatar.png"
            width={32}
            height={40}
            alt="avatar"
          />
          <ChevronUpIcon className="ml-2 w-5 duration-500 group-hover:rotate-180" />
          {open && <Menu toggle={toggle} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
