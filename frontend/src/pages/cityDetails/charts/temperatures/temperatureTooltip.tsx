export const TemperaturesTooltip = (props: any) => {
  const { payload, active } = props;
  if (!active || !payload) return null;

  return (
    <div className="w-24 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-2">
        {payload[0].payload.month}
      </h3>
      {payload.map((category: any, idx: any) => (
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
