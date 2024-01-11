import Container from "../ui/Container";

const TVSection = () => {
  return (
    <Container>
      <div className="flex max-w-[1250px] flex-col  md:mx-auto md:flex-row md:items-center md:text-left">
        <div>
          <h2 className="text-[2rem] font-bold lg:text-5xl">
            Enjoy on your TV
          </h2>
          <p className="pt-4 text-lg font-normal lg:text-2xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <img
            className="relative w-[55vw]"
            src="https://firebasestorage.googleapis.com/v0/b/images-39219.appspot.com/o/images%2Fnetflix-clone%2Ftv.png?alt=media&token=5bea821e-67f3-4886-ada1-c41a5d750398"
            alt=""
          />
          <video
            className="absolute left-[13%] top-[21%] w-[73%]"
            autoPlay
            muted
            loop
          >
            <source
              src="https://firebasestorage.googleapis.com/v0/b/videos-8ca9d.appspot.com/o/netflix-clone%2Fvideo-tv.m4v?alt=media&token=ebfbb6dc-7649-4473-9ba7-9f12c44873f9"
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </Container>
  );
};

export default TVSection;
