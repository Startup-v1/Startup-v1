import { Filter } from "./filter";

type Props = {
  filterOptions: string[];
  title: string;
  size?: string;
};

export function FilterGroup({ filterOptions, title, size }: Props) {
  return (
    <div className="p-4">
      <p className="font-bold pb-2">{title}</p>
      <div className="flex flex-wrap gap-3 pt-2">
        {filterOptions.map((option) => (
          <Filter key={option} label={option} sizeButton={size} />
        ))}
      </div>
    </div>
  );
}
