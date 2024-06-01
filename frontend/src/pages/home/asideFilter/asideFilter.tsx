import { useState, useEffect, useRef } from "react";
import FilterApplyButton from "./filters/filterApplyButton";
import filterOptions from "./filterOptions";
import { FilterPriceRange } from "./filters/filterPriceRange";
import { FilterToolbar } from "./filters/filterToolbar";
import { FilterGroup } from "./filters/filterGroup";

interface FilterContentProps {
  onHideAsideFilter: () => void;
}

const FilterContent: React.FC<FilterContentProps> = ({ onHideAsideFilter }) => {
  const { weather, where, other } = filterOptions;
  return (
    <>
      <FilterToolbar onHideAsideFilter={onHideAsideFilter} />
      <div className="flex-1">
        <FilterGroup filterOptions={weather} title={"Weather"} />
        <FilterGroup filterOptions={where} title="Where" size="px-2 py-3" />
        <FilterPriceRange />
        <FilterGroup filterOptions={other} title="Other" />
      </div>
      <div className="applyButton">
        <FilterApplyButton />
      </div>
    </>
  );
};

interface FilterContainerProps {
  isHidden: boolean;
  onClick: () => void;
  className?: string;
}

const FilterContainer: React.FC<FilterContainerProps> = ({
  isHidden,
  onClick,
  className = "",
}) => {
  const filterRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-500 ease-in-out ${
        isHidden ? "transform -translate-x-full" : ""
      } ${className}`}
      onClick={onClick}
    >
      <div
        ref={filterRef}
        className="w-full h-full bg-white overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <FilterContent onHideAsideFilter={onClick} />
      </div>
    </div>
  );
};

export const AsideFilter: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isMedium, setIsMedium] = useState(window.innerWidth < 768);
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 1280);

  const handleToggleAsideFilter = () => {
    if (window.innerWidth < 1280) {
      setIsHidden(!isHidden);
    }
  };

  const handleResize = () => {
    const width = window.innerWidth;
    setIsMedium(width < 768);
    setIsLarge(width >= 1280);
    setIsHidden(width < 1280);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const showAsideFilterHandler = () => {
      setIsHidden(false);
    };

    window.addEventListener("showAsideFilterEvent", showAsideFilterHandler);

    return () => {
      window.removeEventListener(
        "showAsideFilterEvent",
        showAsideFilterHandler
      );
    };
  }, []);

  return (
    <>
      {!isLarge && (
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${
            isHidden
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          }`}
          onClick={handleToggleAsideFilter}
        ></div>
      )}
      {isMedium && (
        <FilterContainer
          isHidden={isHidden}
          onClick={handleToggleAsideFilter}
        />
      )}
      {!isMedium && !isLarge && (
        <FilterContainer
          isHidden={isHidden}
          onClick={handleToggleAsideFilter}
          className="w-[360px]"
        />
      )}
      {isLarge && (
        <div
          className={`w-full h-screen flex flex-col relative md:w-[360px] md:border md:border-r-gray transition-transform duration-500 ease-in-out ${
            isHidden ? "transform -translate-x-full" : ""
          }`}
          style={{ position: "sticky", top: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <FilterContent onHideAsideFilter={handleToggleAsideFilter} />
        </div>
      )}
    </>
  );
};
