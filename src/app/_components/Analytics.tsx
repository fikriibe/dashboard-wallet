import Typography from "@/components/atoms/Typography";
import ButtonOption from "@/components/molecules/ButtonOption";
import Chart from "@/components/organisms/Chart";
import { useMemo } from "react";

const options: Highcharts.Options = {
  chart: {
    type: "column",
    inverted: true,
    polar: true,
    marginTop: 50,
  },
  pane: {
    size: "100%",
    innerSize: "65%",
    startAngle: -90,
    endAngle: 90,
  },
  xAxis: {
    gridLineWidth: 0,
  },
  plotOptions: {
    column: {
      stacking: "normal",
      borderWidth: 0,
      pointPadding: 0,
      groupPadding: 0.15,
    },
  },
};

const data = [
  { title: "To Do", value: 110 },
  { title: "Inprogress", value: 105 },
  { title: "Done", value: 70 },
];

const colors = ["#EA6050", "#FEA70B", "#595DE0"];

const Analytics = () => {
  const total = data.reduce<number>((acc, { value }) => acc + value, 0);
  const donePercentage = (data[2].value / total) * 100;
  return (
    <>
      <div className="flex items-center justify-between">
        <Typography variant="header">Analytics</Typography>
        <ButtonOption />
      </div>
      <div className="h-[230px] overflow-hidden relative">
        <Chart
          id="analytics"
          className="h-[340px]"
          options={{
            ...options,
            yAxis: {
              tickInterval: 100,
              labels: {
                format: "{text}",
              },
              max: Math.ceil(total / 100) * 100,
              gridLineWidth: 0,
            },
            series: colors.map((color, index) => ({
              name: data[index].title,
              data: [data[index].value],
              type: "column",
              color: color,
            })),
          }}
        />
        <div className="absolute bottom-0 w-full flex flex-col">
          <div className="self-center mb-6">
            <Typography variant="header" size="xl">
              {donePercentage.toFixed(0)}%
            </Typography>
            <Typography className="text-neutral-400">Done</Typography>
          </div>
          <div className="flex items-center gap-4">
            {colors.map((color, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <Typography>{data[index].title}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
