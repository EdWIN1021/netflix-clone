import { Link, useNavigate } from "react-router-dom";
import Overlay from "../ui/Overlay";
import GetStartedForm from "./GetStartedForm";
import DropDown from "../ui/DropDown";
import Button from "../ui/Button";

const BannerSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="w-full bg-cover"
      style={{
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/images-39219.appspot.com/o/images%2Fnetflix-clone%2Fbg.jpg?alt=media&token=46a447ab-8768-403f-9198-b07a7b03058c)`,
      }}
    >
      <Overlay>
        <div className="flex h-[5rem] max-w-[1250px] items-center p-10 lg:mx-auto">
          <Link
            className="h-[1.5rem] flex-1 self-center sm:h-[2.5rem]"
            to={"/"}
          >
            <img
              className="h-full w-[9.25rem] flex-1"
              src="https://firebasestorage.googleapis.com/v0/b/images-39219.appspot.com/o/images%2Fnetflix-clone%2Flogo.svg?alt=media&token=8ad35c75-d4a9-40dc-b5d0-f68a83c812a2"
              alt=""
            />
          </Link>

          <DropDown variant="transparent" />

          <Button
            className="px-4 py-1 text-sm font-medium"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </Button>
        </div>

        <div className="px-8 py-[7.5rem] text-white">
          <div className="text-center">
            <h1 className="text-[2rem] font-bold sm:font-black md:text-[3rem]">
              Unlimited movies, TV shows, and more
            </h1>

            <p className="mt-4 text-lg font-normal md:text-2xl">
              Watch anywhere. Cancel anytime.
            </p>
          </div>
          <div className="pb-16">
            <GetStartedForm />
          </div>
        </div>
      </Overlay>
    </section>
  );
};

export default BannerSection;
