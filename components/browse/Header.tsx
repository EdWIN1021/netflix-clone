"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BellIcon,
  MagnifyingGlassIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";
import clsx from "clsx";
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

  return (
    <div className="sticky top-0 z-50 flex items-center bg-black px-[4%] py-4 text-sm text-white">
      <Image
        className="cursor-pointer"
        src="/logo.svg"
        width={92.5}
        height={30}
        alt=""
        priority
      />

      <ul className="ml-12 mr-2 hidden min-w-[140px] flex-1 gap-5 md:flex">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              className={clsx(
                "rounded  text-[1vw] transition duration-200 hover:text-[#b3b3b3]",
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

      <div className="ml-8 flex flex-1 items-center gap-2 md:hidden">
        <span>Browse</span>
        <ChevronDownIcon className="w-[2vw]" />
      </div>

      <div className="flex items-center gap-5">
        <MagnifyingGlassIcon className="w-5 cursor-pointer" />
        <BellIcon className="w-5 cursor-pointer" />

        <div
          className="group relative flex cursor-pointer"
          onMouseEnter={() => toggle(true)}
          onMouseLeave={() => toggle(false)}
        >
          <Image
            className="h-8 w-8 rounded "
            src="/browse/avatar.png"
            width={32}
            height={32}
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
