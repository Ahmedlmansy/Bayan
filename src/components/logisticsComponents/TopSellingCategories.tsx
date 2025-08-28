import React from "react";
import { useTranslation } from "react-i18next";
import SimpleApexChart from "../Chart";

export default function TopSellingCategories() {
  const { t } = useTranslation("common");
  const areaChartData = {
    series: [
      {
        name: t("Top_Selling_Categories"),
        data: [70, 50, 80, 75, 90, 60, 70],
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
          columnWidth: "30px",
          distributed: true,
          borderRadius: 10,
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
        categories: [
          t("ECR"),
          t("FGI"),
          t("EOQ"),
          t("FMG"),
          t("PLG"),
          t("OLX"),
          t("FCR"),
        ],
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
      <p className="h4">{t("Top_Selling_Categories")}</p>
      <div className="">
        <SimpleApexChart
          type="bar"
          series={areaChartData.series}
          options={areaChartData.options}
          height={260}
        />
      </div>
    </div>
  );
}
