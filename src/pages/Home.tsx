import AppSection from "../components/AppSection";
import BannerSection from "../components/BannerSection";
import DevicesSection from "../components/DevicesSection";
import Footer from "../components/Footer";
import KidSection from "../components/KidSection";
import QuestionSection from "../components/QuestionSection";
import TVSection from "../components/TVSection";
import { homeFooterLinks } from "../constants";
import DropDown from "../ui/DropDown";

const Home = () => {
  return (
    <main className="bg-[rgb(35,35,35,35)]">
      <BannerSection />
      <TVSection />
      <DevicesSection />
      <KidSection />
      <AppSection />
      <QuestionSection />
      <Footer
        className="text-[#737373] bg-black"
        links={homeFooterLinks}
        dropDown={<DropDown />}
      />
    </main>
  );
};

export default Home;
