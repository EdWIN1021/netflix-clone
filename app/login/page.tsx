import LoginModal from "../components/login/LoginModal";
import Overlay from "../components/Overlay";
import Footer from "../components/Footer";
import Link from "next/link";
import { loginFooterLinks as links } from "../constants";

import Image from "next/image";

const page = () => {
  return (
    <div
      className="h-screen min-h-[1150px] bg-cover"
      style={{
        backgroundImage: `url('/bg.jpg')`,
      }}
    >
      <Overlay>
        <div className="flex h-full flex-col">
          <Link className="bg-black p-5 sm:bg-transparent" href={"/"}>
            <Image
              className="h-full w-[9.25rem] flex-1"
              src="/logo.svg"
              alt=""
              width={148}
              height={40}
            />
          </Link>

          <div className="flex-1">
            <LoginModal />
          </div>

          <div className="w-full border-t-2 border-[rgb(35,35,35,35)] sm:border-0 sm:opacity-50">
            <Footer links={links} type={"small"} />
          </div>
        </div>
      </Overlay>
    </div>
  );
};

export default page;
