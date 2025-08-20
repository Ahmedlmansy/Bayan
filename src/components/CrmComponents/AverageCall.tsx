"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import SimpleApexChart from "../Chart";

export default function AverageCall() {
  const { t } = useTranslation("common");
  const areaChartData = {
    series: [
      {
        name: t("Avg_Call_Duration"),
        data: [
          { x: "Mon", y: 8000 },
          { x: "Tue", y: 4500 },
          { x: "Wed", y: 12000 },
          { x: "Thu", y: 9000 },
          { x: "Fri", y: 15000 },
          { x: "Sat", y: 6000 },
          { x: "Sun", y: 11000 },
        ],
      },
    ],
    options: {
      colors: ["#6950e8"],
      chart: {
        foreColor: "#fff",
        type: "area",
        stacked: false,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          show: false,
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        align: "right",
        style: {
          color: "#fff",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: Array(10).fill("#fff"),
          },
        },
        show: false,
      },
      xaxis: {
        show: false,
        type: "category",
        labels: {
          rotate: -45,
          style: {
            colors: Array(10).fill("#fff"),
          },
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        shared: false,
      },
    },
  };
  return (
    <div>
      <p className="h4">{t("Avg_Call_Duration")}</p>
      <div className="">
        <p className="m-0 countCall">10m: 52s</p>
        <p className="m-0 p-description grey-des">
          {t("Avg_Call_Duration_Desc")}
        </p>
      </div>
      <div className="">
        <SimpleApexChart
          type="area"
          series={areaChartData.series}
          options={areaChartData.options}
          height={200}
        />
      </div>
    </div>
  );
}
