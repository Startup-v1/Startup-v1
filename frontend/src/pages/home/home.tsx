import { AsideFilter } from "./asideFilter/asideFilter";
// import { CitiesGrid } from "./cities/cities";
import { HeroSection } from "./heroSection/heroSection";
import "./home.scss";

export function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex w-full flex-1">
        <AsideFilter />
        {/* <CitiesGrid /> */}
      </div>
    </>
  );
}
