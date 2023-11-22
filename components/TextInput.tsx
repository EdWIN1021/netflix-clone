"use client";

import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
  outline?: boolean;
  id: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  outline = true,
  variant = "primary",
  id,
  ...rest
}) => {
  const inputVariants = {
    primary:
      "border-[rgb(128,128,128)] bg-[rgba(21,21,21,0.75)] focus:outline-[0.125rem] focus:outline-white/100 outline-offset-2 outline-none",
    secondary: "bg-[#333] focus:bg-[#454545] border-none outline-none",
    tertiary: "bg-white border border-black outline-none",
  };

  const labelVariants = {
    primary: "text-[#8C8C8C]",
    secondary: "text-[#8C8C8C]",
    tertiary: "text-[rgba(0,0,0,0.7)]",
  };

  return (
    <div className="relative">
      <input
        id={id}
        {...rest}
        className={`${inputVariants[variant]} peer w-full rounded border px-4 pb-1 pt-6 leading-normal`}
      />

      <label
        className={`${labelVariants[variant]} absolute left-[5%] top-1/2 translate-y-[-50%] cursor-text duration-300 peer-focus:left-[4%] peer-focus:top-[30%] peer-focus:text-xs`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
