import DropDown from "./DropDown";

const Footer = ({ links, type }: { links: string[]; type?: string }) => {
  return (
    <div className=" mt-2 bg-black py-3  text-left text-[#fff]">
      <div
        className={`my-3 px-8 ${
          type === "small" ? "xl:w-[1000px]" : "xl:w-[80%]"
        }  lg:mx-auto`}
      >
        <div className="py-3">
          <a className="opacity-70" href="">
            Questions? Contact us.
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-3 py-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {links?.map((link) => (
            <li key={link}>
              <a
                className={`${
                  type === "small" ? "text-[13px]" : "text-sm"
                } underline" opacity-70`}
                href=""
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="pb-3 pt-5">
          <DropDown />
        </div>

        {!type && <p className="py-3 text-sm opacity-70">Netflix Canada</p>}
      </div>
    </div>
  );
};

export default Footer;
