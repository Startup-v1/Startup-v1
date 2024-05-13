import { BarChart } from "@tremor/react";

type Prop = {
  data: any;
  type: "Snow" | "Rain";
  color: string;
};

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString() + " mm";

export const PrecipitationChart = ({ data, type, color }: Prop) => {
  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Annual {type}
      </h3>
      <BarChart
        className="mb-16"
        data={data}
        index="monthAbv"
        categories={[type]}
        colors={[color]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </>
  );
};
