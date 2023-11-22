import { GlobeAltIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const DropDown: React.FC<{ variant?: "transparent" }> = ({ variant }) => {
  return (
    <div className="mr-6 flex max-w-[135px] gap-1 rounded border border-[rgb(128,128,128)]  px-5 py-1.5">
      <GlobeAltIcon
        className={clsx("w-[25px]", {
          "text-white": variant,
        })}
      />
      <select
        className={clsx("bg-transparent outline-none", {
          "text-white": variant,
        })}
      >
        <option value="english">English</option>
        <option value="中文">中文</option>
      </select>
    </div>
  );
};

export default DropDown;
