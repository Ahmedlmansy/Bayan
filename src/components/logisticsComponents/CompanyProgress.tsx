import React from "react";
import SimpleApexChart from "../Chart";
import { useTranslation } from "react-i18next";

export default function CompanyProgress() {
  const { t } = useTranslation("common");
  const areaChartData = {
    series: [
      {
        name: t("Company_Progress"),
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

  return (
    <div>
      <div className="">
        <p className="h4">{t("Company_Progress")}</p>
        <div className="d-flex gap-3">
          <div className="p-description my-3">
            <p className="h2-landing m-0 mainText">
              <span className="dollar_sign">$</span>
              18,469 <span className="backLow low">-2.37%</span>{" "}
            </p>
            <p className="m-0 p-description grey-des">{t("This_month")}</p>
          </div>
          <div className="p-description my-3">
            <p className="h2-landing m-0 darkText">
              {/* <span className="dollar_sign">$</span> */}
              22,356 <span className="backHigh high">+4.67%</span>{" "}
            </p>
            <p className="m-0 p-description grey-des">{t("Last_month")}</p>
          </div>
        </div>

        <SimpleApexChart
          type="area"
          series={areaChartData.series}
          options={areaChartData.options}
          height={280}
        />
      </div>
    </div>
  );
}
