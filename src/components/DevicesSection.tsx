import Container from "../ui/Container";

const DevicesSection = () => {
  return (
    <Container>
      <div className="mx-auto flex max-w-[1250px] flex-col  text-center md:flex-row md:items-center md:text-left ">
        <div className="relative mx-auto w-[45vw]">
          <img className="relative z-[10] w-full" src="" alt="" />
          <video
            className="absolute left-[18%] top-[11%]  h-[48%]"
            autoPlay
            muted
            loop
          >
            <source src="" type="video/webm" />
          </video>
        </div>

        <div className="max-w-[742px]">
          <h2 className="text-[2rem] font-bold lg:text-5xl">
            Watch everywhere
          </h2>
          <p className="pt-4 text-lg font-normal lg:text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default DevicesSection;
