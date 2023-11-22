import LoginModal from "../../components/login/LoginModal";
import Overlay from "../../components/Overlay";
import Footer from "../../components/Footer";
import Link from "next/link";
import { loginFooterLinks as links } from "../../constants";

import Image from "next/image";
import DropDown from "@/components/DropDown";

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
              priority
            />
          </Link>

          <div className="flex-1">
            <LoginModal />
          </div>

          <Footer
            links={links}
            variant="transparent"
            showName={false}
            dropDown={<DropDown />}
          />
        </div>
      </Overlay>
    </div>
  );
};

export default page;
