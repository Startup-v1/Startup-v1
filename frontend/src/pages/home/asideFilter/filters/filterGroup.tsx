import { Filter } from "./filter";

type Props = {
  filterValues: string[];
  title: string;
};

export function FilterGroup({ filterValues, title }: Props) {
  return (
    <div className="p-4">
      <p className="font-bold pb-2">{title}</p>
      <div className="flex flex-wrap gap-3 pt-2">
        {filterValues.map((option) => (
          <Filter key={option} label={option} />
        ))}
      </div>
    </div>
  );
}
