import { City } from "@Pages/home/cities/cities";
import { monthNames } from "src/utils/dates";
import { PrecipitationChart } from "./charts/precipitationChart";
import { TemperatureChart } from "./charts/temperatures/temperatureChart";

type Props = {
  data: City["weather"];
};

export function WeatherCharts({ data }: Props) {
  // Add additional keys to facilitate displaying user friendly strings in the UI
  data.forEach((entry: any, index) => {
    entry.monthAbv = monthNames[index].abbreviated;
    entry.month = monthNames[index].full;
    entry.Min = entry.minTemp;
    entry.Avg = entry.avgTemp;
    entry.Max = entry.maxTemp;
    entry.Rain = entry.totalRain;
    entry.Snow = entry.totalSnow;
  });

  const totalSnow = data.reduce(
    (snowSum, monthData) =>
      // eslint-disable-next-line no-prototype-builtins
      monthData.hasOwnProperty("Snow")
        ? snowSum + monthData.totalSnow
        : snowSum,
    0
  );
  console.log("totalSnow :>> ", totalSnow);
  return (
    <div className="mt-12">
      <TemperatureChart data={data} />
      <PrecipitationChart data={data} type="Rain" color="blue" />
      {totalSnow != 0 && <PrecipitationChart data={data} type="Snow" color="cyan" />}
    </div>
  );
}
