import { Weather } from "@Pages/home/cities/cities";
import { monthNames } from "src/utils/dates";
import { PrecipitationChart } from "./precipitationChart";
import { TemperatureChart } from "./temperatures/temperatureChart";

type Props = {
  data: Weather[];
};

export type ChartUtilKeys = {
  monthAbv: string;
  month: string;
  Min: number;
  Avg: number;
  Max: number;
  Rain: number;
  Snow: number;
};

export function WeatherCharts({ data }: Props) {
  // Add additional keys to facilitate displaying user friendly strings in the UI
  (data as (Weather & ChartUtilKeys)[]).forEach((entry, index) => {
    entry.monthAbv = monthNames[index].abbreviated;
    entry.month = monthNames[index].full;
    entry.Min = entry.minTemp;
    entry.Avg = entry.avgTemp;
    entry.Max = entry.maxTemp;
    entry.Rain = entry.totalRain;
    entry.Snow = entry.totalSnow;
  });

  const dataWithChartKeys = [...(data as (Weather & ChartUtilKeys)[])];

  const totalSnow = data.reduce(
    (snowSum, monthData) =>
      // eslint-disable-next-line no-prototype-builtins
      monthData.hasOwnProperty("Snow")
        ? snowSum + monthData.totalSnow
        : snowSum,
    0
  );

  return (
    <div className="mt-12">
      <TemperatureChart data={dataWithChartKeys} />
      <PrecipitationChart data={dataWithChartKeys} type="Rain" color="blue" />
      {totalSnow !== 0 && (
        <PrecipitationChart data={dataWithChartKeys} type="Snow" color="cyan" />
      )}
    </div>
  );
}
