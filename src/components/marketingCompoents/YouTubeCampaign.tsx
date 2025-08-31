import React from "react";
import SimpleApexChart from "../Chart";
import { useTranslation } from "react-i18next";

export default function YouTubeCampaign() {
  const { t } = useTranslation("common");
  const areaChartData = {
    series: [
      {
        name: t("YouTube_Campaign"),
        data: [40, 60, 80, 100, 80, 60, 40],
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
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20px",
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
      <div className="desSociacl ">
        <p className="h4 my-1">{t("YouTube_Campaign")}</p>
        <p className="m-0 source-category">{t("Active_Campaign")}</p>
      </div>
      <div className="d-flex gap-3">
        <div className="p-description my-3">
          <p className="h2-landing m-0 darkText">
            {/* <span className="dollar_sign">$</span> */}
            500K <span className="low backLow">-10.25%</span>{" "}
          </p>
          <p className="m-0 p-description grey-des">{t("Subscribers")}</p>
        </div>
        <div className="p-description my-3">
          <p className="h2-landing m-0 darkText">
            {/* <span className="dollar_sign">$</span> */}
            1M <span className="backHigh high">+4.67%</span>{" "}
          </p>
          <p className="m-0 p-description grey-des">{t("Subscribers_Goal")}</p>
        </div>
      </div>
      <div className="">
        <SimpleApexChart
          type="bar"
          series={areaChartData.series}
          options={areaChartData.options}
          height={250}
        />
      </div>
    </div>
  );
}
