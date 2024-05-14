import { LineChart } from "@tremor/react";
import { TemperaturesTooltip } from "./temperatureTooltip";

const valueFormatterYAxis = function (number: number) {
  return new Intl.NumberFormat("us").format(number).toString() + "° ";
};

type Prop = {
  data: any;
};

export const TemperatureChart = ({ data }: Prop) => {
  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-2">
        Annual Temperatures
      </h3>
      <LineChart
        className="mb-16 h-72"
        data={data}
        index="monthAbv"
        yAxisWidth={65}
        categories={["Max", "Avg", "Min"]}
        colors={["red", "gray", "blue"]}
        curveType="natural"
        valueFormatter={valueFormatterYAxis}
        showAnimation={true}
        customTooltip={TemperaturesTooltip}
      />
    </>
  );
};
