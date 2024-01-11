import { Link } from "react-router-dom";
import Overlay from "../ui/Overlay";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import DropDown from "../ui/DropDown";
import { loginFooterLinks } from "../constants";

const SignIn = () => {
  return (
    <div
      className="h-screen min-h-[1150px] bg-cover"
      style={{
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/images-39219.appspot.com/o/images%2Fnetflix-clone%2Fbg.jpg?alt=media&token=46a447ab-8768-403f-9198-b07a7b03058c)`,
      }}
    >
      <Overlay>
        <div className="flex h-full flex-col">
          <Link className="bg-black p-5 sm:bg-transparent" to={"/"}>
            <img
              className="h-full w-[9.25rem] flex-1"
              src="https://firebasestorage.googleapis.com/v0/b/images-39219.appspot.com/o/images%2Fnetflix-clone%2Flogo.svg?alt=media&token=8ad35c75-d4a9-40dc-b5d0-f68a83c812a2"
              alt="logo"
            />
          </Link>

          <div className="flex-1">
            <LoginModal />
          </div>

          <Footer
            className="bg-[rgba(0,0,0,0.75)] text-[#737373]"
            links={loginFooterLinks}
            showName={false}
            dropDown={<DropDown />}
          />
        </div>
      </Overlay>
    </div>
  );
};

export default SignIn;
