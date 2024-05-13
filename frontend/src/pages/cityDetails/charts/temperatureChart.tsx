import { LineChart } from "@tremor/react";

const valueFormatterYAxis = function (number: number) {
  return new Intl.NumberFormat("us").format(number).toString() + "° ";
};

const TemperaturesTooltip = (props: any) => {
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

type Prop = {
  data: any;
};

export const TemperatureChart = ({ data }: Prop) => {
  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Annual Temperatures
      </h3>
      <LineChart
        className="mb-16 h-72"
        data={data}
        index="monthAbv"
        yAxisWidth={65}
        categories={["Min", "Max", "Avg"]}
        colors={["blue", "red", "gray"]}
        valueFormatter={valueFormatterYAxis}
        showAnimation={true}
        tickGap={2}
        customTooltip={TemperaturesTooltip}
      />
    </>
  );
};
