import Logo from "@/components/Logo";
import Link from "next/link";
import { signUpFooterLinks as links } from "../../constants";
import Footer from "@/components/Footer";
import DropDown from "@/components/DropDown";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100vh] flex-col bg-white">
      <div className="flex w-full items-center border-b px-7 py-2">
        <div className="flex-1">
          <Logo width={167} height={65} />
        </div>

        <Link href={"/login"} className="text-[19px] font-medium">
          Sign In
        </Link>
      </div>

      <div className="flex-1">{children}</div>

      <Footer
        links={links}
        variant="light"
        showName={false}
        dropDown={<DropDown />}
      />
    </div>
  );
}
