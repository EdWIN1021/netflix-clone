import Logo from "@/components/Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100vh] bg-white">
      <div className="flex w-full border-b  px-7 py-4">
        <div className="flex-1">
          <Logo width={167} height={65} />
        </div>

        <button className="text-[19px] font-medium">Sign In</button>
      </div>
      <>{children}</>
    </div>
  );
}
