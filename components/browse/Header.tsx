"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { id: 1, title: "Home", path: "/browse" },
  { id: 2, title: "TV Shows", path: "/browse/tv-shows" },
  { id: 3, title: "Movies", path: "/browse/movies" },
  { id: 4, title: "New & Popular", path: "/browse/new-popular" },
  { id: 5, title: "My List", path: "/browse/my-list" },
  { id: 6, title: "Browse by Languages", path: "/browse/languages" },
];

const Header = () => {
  const [bg, setBg] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  return (
    <div
      className="fixed z-[100] flex h-[68px] w-[100vw] items-center bg-transparent px-[4%] text-sm text-white"
      style={{ backgroundColor: bg ? "rgb(20,20,20)" : "transparent" }}
    >
      <Image
        className="cursor-pointer"
        src="/logo.svg"
        width={92.5}
        height={30}
        alt=""
        priority
      />

      <ul className="ml-12 flex flex-1 gap-5 font-normal">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              className={clsx(
                "rounded  transition duration-200 hover:text-[#b3b3b3]",
                {
                  "font-bold": pathname === link.path,
                },
              )}
              href={link.path}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6 p-8">
        <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
        <BellIcon className="h-6 w-6 cursor-pointer" />
        <Image
          className="cursor-pointer rounded"
          src="/browse/avatar.png"
          width={32}
          height={32}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
