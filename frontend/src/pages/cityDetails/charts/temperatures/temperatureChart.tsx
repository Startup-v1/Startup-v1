import { LineChart } from "@tremor/react";
import { TemperaturesTooltip } from "./temperatureTooltip";
import { FaHotjar } from "react-icons/fa";
import { MdSevereCold } from "react-icons/md";
import { Weather } from "@Pages/home/cities/cities";
import { ChartUtilKeys } from "../cityDetailsCharts";
import {
  Degrees,
  getDegrees,
} from "src/utils/temperatureUtil";
import { useStore } from "@Store/store";
import { TemperatureMetric } from "@SharedComponents/navbar/userTemperature";

const valueFormatterYAxis = (
  degrees: number,
  userTemperature: TemperatureMetric
) => getDegrees(degrees, userTemperature);

type Prop = {
  data: (Weather & ChartUtilKeys)[];
};

export const TemperatureChart = ({ data }: Prop) => {
  const { userTemperature } = useStore();

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
          <Degrees degrees={hottestMonth.avgTemp} /> Avg
        </div>
        <div className="flex items-center">
          <MdSevereCold />
          <span className="font-bold  ml-1 mr-1">{coldestMonth.month}</span>
          <Degrees degrees={coldestMonth.avgTemp} /> Avg
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
        valueFormatter={(number) =>
          valueFormatterYAxis(number, userTemperature)
        }
        showAnimation={true}
        customTooltip={TemperaturesTooltip}
      />
    </>
  );
};
