import React from "react";
import SimpleApexChart from "../Chart";
import { useTranslation } from "react-i18next";

export default function ReturningRate() {
  const { t } = useTranslation("common");
  const areaChartData = {
    options: {
      chart: {
        type: "line",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: t("Returning"),
          data: [0, 150, 300, 200, 200, 150],
        },
        {
          name: t("New"),
          data: [20, 110, 200, 400, 300, 250],
        },
      ],
      colors: ["#3A36DB", "#FF4560"],
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        min: 0,
        max: 400,
        tickAmount: 5,
        labels: {
          formatter: function (val: number) {
            return val.toFixed(0);
          },
        },
      },
      grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 3,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        markers: {
          radius: 50,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
    },
  };
  return (
    <div>
      <div className="p-description">
        <p className="h2-landing m-0 darkText">
          {/* <span className="dollar_sign">$</span> */}
          50.56%<span className=" mx-2 high">+2.5%</span>{" "}
        </p>
        <p className="m-0 p-description grey-des">{t("Returning_Rate")}</p>
      </div>
      <SimpleApexChart
        type={areaChartData.options.chart.type}
        series={areaChartData.options.series}
        options={areaChartData.options}
        height={280}
      />
    </div>
  );
}
