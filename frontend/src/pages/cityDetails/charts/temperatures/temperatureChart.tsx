import { LineChart } from "@tremor/react";
import { TemperaturesTooltip } from "./temperatureTooltip";
import { FaHotjar } from "react-icons/fa";
import { MdSevereCold } from "react-icons/md";
import { Weather } from "@Pages/home/cities/cities";
import { ChartUtilKeys } from "../cityDetailsCharts";

const valueFormatterYAxis = function (number: number) {
  return new Intl.NumberFormat("us").format(number).toString() + "° ";
};

type Prop = {
  data: (Weather & ChartUtilKeys)[];
};

export const TemperatureChart = ({ data }: Prop) => {
  const hottestMonth = data.reduce((prev, curr) => {
    return curr.avgTemp > prev.avgTemp ? curr : prev;
  });
  const coldestMonth = data.reduce((prev, curr) => {
    return curr.avgTemp < prev.avgTemp ? curr : prev;
  });

  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-2">
        <div className="font-bold mb-2">Annual Temperatures </div>
        <div className="flex items-center">
          <FaHotjar />
          <span className="font-bold ml-1 mr-1">{hottestMonth.month}</span>
          <span>{hottestMonth.avgTemp} °C Avg</span>
        </div>
        <div className="flex items-center">
          <MdSevereCold />
          <span className="font-bold  ml-1 mr-1">{coldestMonth.month}</span>
          <span>{coldestMonth.avgTemp} °C Avg</span>
        </div>
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
