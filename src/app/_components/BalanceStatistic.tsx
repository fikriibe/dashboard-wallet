"use client";

import Typography from "@/components/atoms/Typography";
import { PiCaretDown, PiCoins } from "react-icons/pi";
import highcharts from "highcharts/highcharts";
import { useEffect } from "react";
import Button from "@/components/atoms/Button";
import Chart from "@/components/organisms/Chart";

const BalanceStatistic = () => {
  return (
    <div className="grid  grid-cols-3">
      <div className="flex flex-col gap-2">
        <Typography>Balance statistics</Typography>
        <Typography variant="header" size="xl">
          $546
        </Typography>
        <div className="flex items-center gap-2">
          <PiCoins size={60} />
          <Typography>Your total balance</Typography>
        </div>
        <Typography size="sm" className="text-neutral-300 mt-auto">
          Always see your earnings updates
        </Typography>
      </div>
      <div className="col-span-2 flex flex-col">
        <Button variant="contained" size="sm" className="self-end">
          Filter <PiCaretDown />
        </Button>
        <Chart
          id="balance"
          className="h-[194px]"
          options={{
            xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
            series: [
              { data: [60, 50, 30, 20, 10], type: "column", name: "test" },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default BalanceStatistic;
