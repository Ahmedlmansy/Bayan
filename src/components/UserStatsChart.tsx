import React, { useEffect, useState } from "react";
import SimpleApexChart from "./Chart";
import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function UserStatsChart() {
  const { t } = useTranslation("common");

  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  const areaChartData = {
    series: [
      {
        name: "Monthly number",

        data: [
          { x: "Jan", y: 7000 },
          { x: "Feb", y: 4000 },
          { x: "Mar", y: 5000 },
          { x: "Apr", y: 17000 },
          { x: "May", y: 18000 },
          { x: "Jun", y: 35000 },
          { x: "Jul", y: 22000 },
          { x: "Aug", y: 10000 },
          { x: "Sep", y: 6000 },
          { x: "Oct", y: 18000 },
        ],
      },
    ],
    options: {
      colors: ["#6950e8"],
      chart: {
        foreColor: "#fff", // يغير لون كل النصوص لتناسب الدارك مود
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
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
          color: "#fff", // لون عنوان الشارت
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
      },
      xaxis: {
        type: "category",
        labels: {
          rotate: -45,
          style: {
            colors: Array(10).fill("#fff"),
          },
        },
      },
      tooltip: {
        shared: false,
      },
      // theme: {
      //   mode: "dark",
      //   palette: "palette1",
      // },
    },
  };

  const dataMoun = [
    {
      name: t("users"),
      value: "12,060",
      change: "+12.5%",
      status: "high",
    },
    {
      name: t("sessions"),
      value: "30,000",
      change: "+5.56%",
      status: "high",
    },
    {
      name: t("Bounce_Rate"),
      value: "56%",
      change: "-1.5%",
      status: "low",
    },
    {
      name: t("Session_Duration"),
      value: "3m 10s",
      change: "-10.5%",
      status: "low",
    },
  ];
  return (
    <div className="">
      <div className="all_material">
        {dataMoun.map((item, index) => (
          <div
            key={index}
            className={`count-data p-3 ${
              activeIndex === index ? "active-data" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <p className="m-0 p-description name_data">{item.name}</p>
            <h5 className="h3-landing m-0">{item.value}</h5>
            <span className={item.status}>{item.change}</span>
          </div>
        ))}
      </div>
      <SimpleApexChart
        type="area"
        series={areaChartData.series}
        options={areaChartData.options}
        height={350}
      />
    </div>
  );
}
