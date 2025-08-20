import React, { useState } from "react";
import SimpleApexChart from "../Chart";
import { useTranslation } from "react-i18next";

export default function ProfitRate() {
  const { t } = useTranslation("common");

  const [activeIndex, setActiveIndex] = useState(0);

  const areaChartData = {
    series: [
      {
        name: t("Profit_Rate"),
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
        foreColor: "#fff",
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
      name: t("Revenue"),
    },
    {
      name: t("Users"),
    },
    {
      name: t("Deals"),
    },
    {
      name: t("Profit"),
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
          </div>
        ))}
      </div>
      <div className="p-description my-3">
        <p className="h2-landing m-0 darkText">
          {/* <span className="dollar_sign">$</span> */}
          22,356 <span className="backHigh high">+4.67%</span>{" "}
        </p>
        <p className="m-0 p-description grey-des">{t("Last_month")}</p>
      </div>
      <SimpleApexChart
        type="area"
        series={areaChartData.series}
        options={areaChartData.options}
        height={320}
      />
    </div>
  );
}
