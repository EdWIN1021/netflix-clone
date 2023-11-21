import TextInput from "../TextInput";

const LoginModal = () => {
  return (
    <div className="mx-auto h-full rounded bg-black px-[5%] py-[60px] pt-[40px] text-white sm:h-[660px] sm:w-[450px] sm:bg-[rgba(0,0,0,0.75)] sm:px-[68px]">
      <h1 className="text-[2rem] font-medium">Sign In</h1>

      <TextInput label={"Email or phone number"} />
      <TextInput label={"Password"} />

      <button className="btn-primary mt-10 w-full py-3">Sign In</button>

      <div className="mt-4 flex text-[13px] text-[#b3b3b3]">
        <div className="flex-1 ">
          <div className="flex items-center">
            <input
              className="relative mr-1 h-[18px] w-[18px] appearance-none rounded bg-white after:invisible after:absolute after:left-1/2 after:top-1/2 after:h-[10px] after:w-[10px] after:translate-x-[-50%] after:translate-y-[-50%] after:text-center after:leading-[10px]  after:text-black after:content-['✔'] checked:bg-[#8C8C8C] checked:after:visible"
              type="checkbox"
            />
            <span>Remember me</span>
          </div>
        </div>

        <span>Need Help?</span>
      </div>

      <div className="mt-20 text-[#737373]">
        <div className="text-[16px]">
          New to Netflix?{" "}
          <a className="text-white hover:underline" href="">
            Sign up now.
          </a>
        </div>

        <p className="my-[13px] text-[13px]">
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a
          bot.
          <a className="text-[#0071eb] hover:underline" href="">
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
