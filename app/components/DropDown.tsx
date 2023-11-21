import { GlobeAltIcon } from "@heroicons/react/24/outline";

const DropDown = () => {
  return (
    <div className="mr-6 flex max-w-[135px] gap-1 rounded border border-[rgb(128,128,128)] bg-[rgba(21,21,21,0.75)] px-5 py-1.5 text-white ">
      <GlobeAltIcon className="w-[25px]" />
      <select className="bg-[rgba(21,21,21,0.75)] bg-black outline-none">
        <option value="english">English</option>
        <option value="中文">中文</option>
      </select>
    </div>
  );
};

export default DropDown;
