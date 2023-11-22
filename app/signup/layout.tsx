import Logo from "@/components/Logo";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100vh] bg-white">
      <div className="flex w-full items-center border-b px-7 py-4 ">
        <div className="flex-1">
          <Logo width={167} height={65} />
        </div>

        <Link href={"/login"} className="text-[19px] font-medium">
          Sign In
        </Link>
      </div>

      <>{children}</>
    </div>
  );
}
