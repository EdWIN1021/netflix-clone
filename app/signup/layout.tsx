import { signUpFooterLinks as links } from "../../constants";
import Footer from "@/components/Footer";
import DropDown from "@/components/DropDown";
import Header from "../../components/signup/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100vh] flex-col bg-white">
      <Header />

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
