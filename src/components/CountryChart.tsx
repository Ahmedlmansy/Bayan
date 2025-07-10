import React from "react";
import SimpleApexChart from "./Chart";

export default function CountryChart() {
  const areaChartData = {
    series: [
      {
        name: "Completed Retes ",
        data: [60, 40, 80, 60, 90, 70, 80],
      },
    ],
    options: {
      legend: {
        show: false,
      },
      colors: [
        "#6950e8",
        "#E7EAED",
        "#6950e8",
        "#E7EAED",
        "#6950e8",
        "#E7EAED",
        "#6950e8",
      ],
      grid: {
        show: false,
      },
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          columnWidth: "12px",
          distributed: true,
          borderRadius: 6,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val: number) {
          return val.toString();
        },
        offsetY: -20,
        style: {
          fontSize: "16px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        labels: {
          show: true,
        },
        show: false,
        categories: ["AUS", "USA", "RSA", "BRA", "JAP", "UAE", "THI"],
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        labels: {
          show: false,
          formatter: function (val: number) {
            return val.toString();
          },
        },
      },
    },
  };
  return (
    <div>
      <SimpleApexChart
        type="bar"
        series={areaChartData.series}
        options={areaChartData.options}
        height={400}
      />
    </div>
  );
}
