import { GlobeAltIcon } from "@heroicons/react/24/outline";

const DropDown: React.FC<{ bgColor?: string; fontColor?: string }> = ({
  bgColor,
  fontColor = "#fff",
}) => {
  return (
    <div
      className="mr-6 flex max-w-[135px] gap-1 rounded border border-[rgb(128,128,128)] bg-[rgba(21,21,21,0.75)] px-5 py-1.5"
      style={{ color: fontColor }}
    >
      <GlobeAltIcon className="w-[25px]" />
      <select className="bg-[rgba(21,21,21,0.75)] outline-none">
        <option value="english">English</option>
        <option value="中文">中文</option>
      </select>
    </div>
  );
};

export default DropDown;
