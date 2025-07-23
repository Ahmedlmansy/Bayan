"use client";

import React from "react";
import dynamic from "next/dynamic";
import { CircularProgress } from "@mui/material";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => (
    <div>
      {" "}
      <CircularProgress size="3rem" />{" "}
    </div>
  ),
});

const SimpleApexChart = ({ type, series, options, height = 350 }) => {
  if (!series || !Array.isArray(series) || series.length === 0) {
    return <div className="text-center p-4">No data avi</div>;
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chart
        options={options || {}}
        series={series}
        type={type}
        height={height}
      />
    </div>
  );
};

export default SimpleApexChart;
