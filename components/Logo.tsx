import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC<{ width: number; height: number; className?: string }> = ({
  width,
  height,
  ...rest
}) => {
  return (
    <Link href={"/"}>
      <Image
        {...rest}
        style={{ width, height }}
        src="/logo.svg"
        alt="logo"
        width={167}
        height={45}
        priority
      />
    </Link>
  );
};

export default Logo;
