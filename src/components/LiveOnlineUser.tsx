import React from "react";
import SimpleApexChart from "./Chart";
import { useTranslation } from "react-i18next";

export default function LiveOnlineUser() {
  const { t } = useTranslation("common");
  const areaChartData = {
    series: [
      {
        name: "Live Users",
        data: [20, 35, 47, 40, 45, 30, 25],
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
        enabled: true,
        formatter: function (val: number) {
          return val.toString();
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        show: false,
        categories: [
          t("days.sunday"),
          t("days.monday"),
          t("days.tuesday"),
          t("days.wednesday"),
          t("days.thursday"),
          t("days.friday"),
          t("days.saturday"),
        ],
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
    <div className="">
      <SimpleApexChart
        type="bar"
        series={areaChartData.series}
        options={areaChartData.options}
        height={350}
      />
    </div>
  );
}
