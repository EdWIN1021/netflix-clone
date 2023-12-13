import Banner from "../../components/browse/Banner";
import Row from "../../components/browse/Row";
import Image from "next/image";

import {
  getTrending,
  getPopularMovies,
  getUpcomingMovies,
  getPopularSeries,
  getTopRatedSeries,
  getTopRatedMovies,
  getNowPlaying,
} from "../../requests/server";
import Link from "next/link";

const page = async () => {
  const [
    trending,
    popularMovies,
    upcomingMovies,
    popularSeries,
    topRatedSeries,
    topRatedMovies,
    nowPlaying,
  ] = await Promise.all([
    getTrending(),
    getPopularMovies(),
    getUpcomingMovies(),
    getPopularSeries(),
    getTopRatedSeries(),
    getTopRatedMovies(),
    getNowPlaying(),
  ]);

  return (
    <div></div>
    // <div>
    //   <Banner />

    //   <div className="pl-[4%]">
    //     <Row title={"Trending Now"} movies={trending?.results} type="movie" />
    //     <Row
    //       title={"Upcoming Movies"}
    //       movies={upcomingMovies?.results}
    //       type="movie"
    //     />
    //     <Row
    //       title={"Popular Movies"}
    //       movies={popularMovies?.results}
    //       type="movie"
    //     />
    //     <Row title={"Now Playing"} movies={nowPlaying?.results} type="movie" />

    //     <Row
    //       title={"Top Rated Movies"}
    //       movies={topRatedMovies?.results}
    //       type="tv"
    //     />
    //     <Row
    //       title={"Popular TV shows"}
    //       movies={popularSeries?.results}
    //       type="tv"
    //     />
    //     <Row
    //       title={"Top Rated TV shows"}
    //       movies={topRatedSeries?.results}
    //       type="tv"
    //     />
    //   </div>

    //   <div className=" mx-auto max-w-[980px] px-10 pb-[14px] pt-20 text-[13px] leading-4 text-[rgb(128,128,128)]">
    //     <div className="mb-4 flex gap-8">
    //       <Image
    //         className="h-8 w-8"
    //         src="/browse/facebook.svg"
    //         alt="facebook..."
    //         width={35}
    //         height={35}
    //       />
    //       <Image
    //         className="h-8 w-8"
    //         src="/browse/instagram.svg"
    //         alt="instagram..."
    //         width={25}
    //         height={25}
    //       />
    //       <Image
    //         className="h-8 w-8"
    //         src="/browse/twitter.svg"
    //         alt="twitter..."
    //         width={25}
    //         height={25}
    //       />
    //       <Image
    //         className="h-8 w-8"
    //         src="/browse/youtube.svg"
    //         alt="youtube..."
    //         width={25}
    //         height={25}
    //       />
    //     </div>

    //     <div className="grid sm:grid-cols-2 lg:grid-cols-4">
    //       <nav>
    //         <ul>
    //           <li className="mb-4">
    //             <Link href="">Audio Description</Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="">Investor Relations</Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="">Privacy</Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="">Contact Us</Link>
    //           </li>
    //         </ul>
    //       </nav>

    //       <nav>
    //         <ul>
    //           <li className="mb-4">
    //             <Link href="">Help Center</Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="">Jobs</Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="">Legal Notices</Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="">Ad Choices</Link>
    //           </li>
    //         </ul>
    //       </nav>

    //       <nav>
    //         <ul>
    //           <li className="mb-4">
    //             <Link href="">Gift Cards</Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="">Netflix Shop</Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="">Cookie Preferences</Link>
    //           </li>
    //         </ul>
    //       </nav>

    //       <nav>
    //         <ul>
    //           <li className="mb-4">
    //             <Link href="">Media Center</Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="">Terms of Use</Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="">Corporate Information</Link>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //     <button className="mb-[20px] border border-solid border-[rgb(128,128,128)] p-[6.5px]">
    //       Service Code
    //     </button>

    //     <div>
    //       <span className="text-[11px]">© 1997-2023 Netflix, Inc.</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default page;
