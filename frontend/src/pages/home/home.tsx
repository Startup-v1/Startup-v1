import { AsideFilter } from "./asideFilter/asideFilter";
import { CitiesGrid } from "./cities/cities";
import { HeroSection } from "./heroSection/heroSection";
import "./home.scss";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="page page-divider">
        <AsideFilter />
        <CitiesGrid />
      </div>
    </>
  );
}
