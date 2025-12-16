import React from "react";
import { useTranslation } from "react-i18next";
import SimpleApexChart from "../Chart";

export default function SalesForecast() {
  const { t } = useTranslation("common");
  const areaChartData = {
    series: [
      {
        name: t("Average_Daily_Sales"),
        data: [12, 90, 40],
      },
    ],
    options: {
      legend: {
        show: false,
      },
      colors: ["#6950e8", "#E7EAED", "#6950e8"],
      grid: {
        show: true,
      },
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "17px",
          distributed: true,
          borderRadius: 5,
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
          show: true,
        },
        show: true,
        categories: [t("Goal"), t("Pending"), t("Profit")],
        position: "bottom",
        axisBorder: {
          show: true,
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
          show: true,
          formatter: function (val: number) {
            return val.toString();
          },
        },
      },
    },
  };
  return (
    <div>
      <p className="h4">{t("Sales_Forecast")} </p>
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
