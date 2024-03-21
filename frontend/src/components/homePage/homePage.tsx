import { CitiesGrid } from "./cities/cities";
import { HeroSection } from "./heroSection/heroSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="page">
        <CitiesGrid />
      </div>
    </>
  );
}
