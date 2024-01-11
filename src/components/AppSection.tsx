import Container from "../ui/Container";

const APPSection = () => {
  return (
    <Container>
      <div className="mx-auto flex max-w-[1250px] flex-col text-center md:flex-row-reverse md:items-center md:text-left">
        <div>
          <h2 className="text-[2rem] font-bold lg:text-5xl">
            Download your shows to watch offline
          </h2>
          <p className="pt-4 text-lg font-normal lg:text-2xl">
            Watch on a plane, train, or submarine...
          </p>
        </div>

        <div className="relative mx-auto max-w-xl">
          <img
            className="w-[60vw]"
            src="https://firebasestorage.googleapis.com/v0/b/images-39219.appspot.com/o/images%2Fnetflix-clone%2Fmobile.jpg?alt=media&token=a13f24b4-3fba-4580-bbb1-762880655c73"
            alt="phone"
            width={500}
            height={500}
          />

          <div className="absolute left-[50%] top-[80%] flex h-[22%] w-[55%] translate-x-[-50%] translate-y-[-50%]  items-center rounded-xl  border-2 border-solid border-[rgb(128,128,128)] bg-black p-2 shadow-[0_0_2rem_0_rgb(0,0,0)]">
            <img
              className="mr-4 w-[3.5vw]"
              src="https://firebasestorage.googleapis.com/v0/b/images-39219.appspot.com/o/images%2Fnetflix-clone%2Fboxshot.png?alt=media&token=29261701-923d-4607-9f42-97eb683f49c5"
              alt=""
              width={500}
              height={500}
            />

            <div className="flex-1">
              <div className="text-start">
                <div>Stranger Things</div>
                <div className="text-[#0071eb]">Downloading...</div>
              </div>
            </div>

            <img
              className="h-full w-[5vw]"
              src="https://firebasestorage.googleapis.com/v0/b/images-39219.appspot.com/o/images%2Fnetflix-clone%2Fdownload.gif?alt=media&token=03a28333-b8d9-4350-93d9-a146b585ac7a"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default APPSection;
