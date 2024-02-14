"use client";
import { FC, useEffect } from "react";
import highcharts from "highcharts/highcharts";
import HighchartsMore from "highcharts/highcharts-more";

type Props = {
  id: string;
  options: Highcharts.Options;
  className?: string;
};

export const defaultOptions: Highcharts.Options = {
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  yAxis: {
    title: { text: "" },
  },
  title: {
    text: "",
  },
};

HighchartsMore(highcharts);

const Chart: FC<Props> = ({ id, options, className }) => {
  useEffect(() => {
    highcharts.chart(id, { ...defaultOptions, ...options });
  }, [id, options]);
  return <div id={id} className={className} />;
};

export default Chart;
