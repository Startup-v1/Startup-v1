import { Weather } from "@Pages/home/cities/cities";
import { BarChart } from "@tremor/react";
import { FaCloudRain } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { ChartUtilKeys } from "./cityDetailsCharts";

type Prop = {
  data: (Weather & ChartUtilKeys)[];
  type: "Snow" | "Rain";
  color: string;
};

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString() + " mm";

export const PrecipitationChart = ({ data, type, color }: Prop) => {
  const wettestMonth = data.reduce((prev, curr) => {
    return curr.totalRain + curr.totalSnow > prev.totalRain + prev.totalSnow
      ? curr
      : prev;
  });
  const totalPrecipitations = data.reduce((total, curr) => {
    return total + curr.totalRain + curr.totalSnow;
  }, 0);

  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-2">
        <div className="font-bold mb-2">Annual {type} </div>
        <div className="flex items-center">
          <FaCloudRain />
          <span className="font-bold ml-1 mr-1">{wettestMonth.month}</span>
          <span>{wettestMonth.totalRain + wettestMonth.totalSnow} mm</span>
        </div>
        <div className="flex items-center">
          <MdCalendarMonth />
          <span className="font-bold ml-1 mr-1">Total</span>
          <span>{totalPrecipitations} mm</span>
        </div>
      </h3>
      <BarChart
        className="mb-16"
        data={data}
        index="monthAbv"
        categories={[type]}
        colors={[color]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
        showAnimation={true}
      />
    </>
  );
};
