import BannerSection from "../components/BannerSection";
import Footer from "../components/Footer";
import QuestionSection from "../components/QuestionSection";
import { homeFooterLinks } from "../constants";
import DropDown from "../ui/DropDown";

const Home = () => {
  return (
    <main className="bg-[rgb(35,35,35,35)]">
      <BannerSection />
      {/* <TVSection /> */}
      {/* <DevicesSection />
      <KidSection />
      <AppSection /> */}
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
