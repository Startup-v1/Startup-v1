import { City } from "@Pages/home/cities/cities";
import { LineChart } from "@tremor/react";
import { monthNames } from "src/utils/dates";

const valueFormatterYAxis = function (number: number) {
  return new Intl.NumberFormat("us").format(number).toString() + "° ";
};

type Props = {
  data: City["weather"];
};

export function WeatherCharts({ data }: Props) {
  const temperaturesTooltip = (props: any) => {
    const { payload, active } = props;
    if (!active || !payload) return null;

    const sortedEntries = ["Max", "Avg", "Min"].map((name) =>
      payload.find((obj: any) => obj.name === name)
    );

    return (
      <div className="w-24 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
        <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-2">
          {payload[0].payload.month}
        </h3>
        {sortedEntries.map((category, idx) => (
          <div
            key={idx}
            className={`flex flex-1 space-x-2.5 ${idx === 2 ? "" : "mb-2"}`}
          >
            <div
              className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
            />
            <div className="space-y-1">
              <p className="text-tremor-content">{category.dataKey}</p>
              <p className="font-medium text-tremor-content-emphasis !mt-0">
                {category.value}°
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Add additional keys to facilitate displaying data in the graph
  data.forEach((entry: any, index) => {
    entry.monthAbv = monthNames[index].abbreviated;
    entry.month = monthNames[index].full;
    entry.Min = entry.minTemp;
    entry.Avg = entry.avgTemp;
    entry.Max = entry.maxTemp;
  });

  return (
    <>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-24 mb-12">
        Weather
      </p>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Annual Temperatures
      </h3>
      <LineChart
        className="mt-4 h-72"
        data={data}
        index="monthAbv"
        yAxisWidth={65}
        categories={["Min", "Max", "Avg"]}
        colors={["blue", "red", "neutral"]}
        valueFormatter={valueFormatterYAxis}
        showAnimation={true}
        tickGap={2}
        customTooltip={temperaturesTooltip}
      />
    </>
  );
}
