import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";

const Browse = () => {
  return (
    <div className="bg-black overflow-y-visible">
      <Header />
      <Banner />
      <div className="pl-[4%]">
        <Row title={"Trending Now"} type="movie" url={"/trending/all/week"} />
        <Row title={"Popular Movies"} type="movie" url={"/movie/popular"} />
        <Row title={"Upcoming Movies"} type="movie" url={"/movie/upcoming"} />
        <Row title={"Top Rated Movies"} type="tv" url={"/movie/top_rated"} />
        <Row title={"Popular TV shows"} type="tv" url={"/tv/popular"} />
        <Row title={"Top Rated TV shows"} type="tv" url={"/tv/top_rated"} />
      </div>

      <div className=" mx-auto max-w-[980px] px-10 pb-[14px] pt-20 text-[13px] leading-4 text-[rgb(128,128,128)]">
        <div className="mb-4 flex gap-8">
          <img className="h-8 w-8" src="/facebook.svg" alt="facebook..." />
          <img className="h-8 w-8" src="/instagram.svg" alt="instagram..." />
          <img className="h-8 w-8" src="/twitter.svg" alt="twitter..." />
          <img className="h-8 w-8" src="/youtube.svg" alt="youtube..." />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          <nav>
            <ul>
              <li className="mb-4">
                <Link to="">Audio Description</Link>
              </li>
              <li className="mb-4">
                <Link to="">Investor Relations</Link>
              </li>
              <li className="mb-4">
                <Link to="">Privacy</Link>
              </li>
              <li className="mb-4">
                <Link to="">Contact Us</Link>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li className="mb-4">
                <Link to="">Help Center</Link>
              </li>
              <li className="mb-4">
                <Link to="">Jobs</Link>
              </li>
              <li className="mb-4">
                <Link to="">Legal Notices</Link>
              </li>
              <li className="mb-4">
                <Link to="">Ad Choices</Link>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li className="mb-4">
                <Link to="">Gift Cards</Link>
              </li>
              <li className="mb-4">
                <Link to="">Netflix Shop</Link>
              </li>
              <li className="mb-4">
                <Link to="">Cookie Preferences</Link>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li className="mb-4">
                <Link to="">Media Center</Link>
              </li>
              <li className="mb-4">
                <Link to="">Terms of Use</Link>
              </li>
              <li className="mb-4">
                <Link to="">Corporate Information</Link>
              </li>
            </ul>
          </nav>
        </div>
        <button className="mb-[20px] border border-solid border-[rgb(128,128,128)] p-[6.5px]">
          Service Code
        </button>

        <div>
          <span className="text-[11px]">© 1997-2023 Netflix, Inc.</span>
        </div>
      </div>
    </div>
  );
};

export default Browse;
