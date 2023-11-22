import AppSection from "../components/home/AppSection";
import BannerSection from "../components/home/BannerSection";
import TVSection from "../components/home/TVSection";
import KidSection from "../components/home/KidSection";
import Footer from "../components/Footer";
import QuestionSection from "../components/home/QuestionSection";
import { homeFooterLinks } from "../constants";
import DevicesSection from "../components/home/DevicesSection";
import DropDown from "@/components/DropDown";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <TVSection />
      <DevicesSection />
      <KidSection />
      <AppSection />
      <QuestionSection />

      <Footer links={homeFooterLinks} variant="dark" dropDown={<DropDown />} />
    </main>
  );
}
