import React from "react";
import SimpleApexChart from "../Chart";
import { useTranslation } from "react-i18next";

export default function Transactions() {
  const { t } = useTranslation("common");
  const dataChart = {
    series: [
      {
        name: t("Income"),
        data: [
          45000, 39000, 22000, 30000, 28000, 35000, 48000, 25000, 20000, 43000,
          25000, 15000,
        ],
      },
      {
        name: t("Expance"),
        data: [
          42000, 35000, 28000, 15000, 20000, 30000, 45000, 18000, 30000, 40000,
          30000, 12000,
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          formatter: (val: number) => `${(val / 1000).toFixed(0)}K`,
        },
      },
      fill: {
        opacity: 1,
      },
      colors: ["#6C5CE7", "#DFE6E9"],
      legend: {
        position: "top",
        horizontalAlign: "left",
        fontSize: "14px",
      },
      grid: {
        strokeDashArray: 4,
      },
      tooltip: {
        y: {
          formatter: (val: number) => `$${val.toLocaleString()}`,
        },
      },
    },
  };
  return (
    <div>
      <p className="h4"> {t("Transactions")} </p>
      <SimpleApexChart
        type="bar"
        series={dataChart.series}
        options={dataChart.options}
        height={250}
      />
    </div>
  );
}
