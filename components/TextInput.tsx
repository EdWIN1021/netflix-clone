"use client";

import clsx from "clsx";
import { InputHTMLAttributes, useEffect, useMemo, useState } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
  outline?: boolean;
  value: string;
  id: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  outline = true,
  variant = "primary",
  id,
  value,
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

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    value && setIsActive(true);
  }, [value]);

  return (
    <div className="relative">
      <input
        id={id}
        {...rest}
        value={value}
        className={`${inputVariants[variant]} w-full rounded border px-4 pb-1 pt-6 leading-normal`}
        onFocus={() => setIsActive(true)}
        onBlur={() => !value && setIsActive(false)}
      />

      <label
        className={clsx(
          `${labelVariants[variant]} absolute cursor-text duration-200`,
          {
            "left-[5%] top-1/2 -translate-y-1/2": !isActive,
          },
          {
            "left-[3%] top-[20%] text-xs": isActive,
          },
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
