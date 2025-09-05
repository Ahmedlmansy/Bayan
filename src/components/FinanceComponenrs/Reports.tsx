import React from "react";
import { useTranslation } from "react-i18next";
import SimpleApexChart from "../Chart";

export default function Reports() {
  const { t } = useTranslation("common");
  const areaChartData = {
    series: [15000, 10000],
    options: {
      chart: {
        type: "donut",
      },
      labels: [t("Revenue"), t("Expense")],
      colors: ["#6C5CE7", "#DFE6E9"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "14px",
        markers: {
          radius: 12,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
            labels: {
              show: true,
              name: {
                show: true,
                offsetY: -10,
                fontSize: "14px",
                color: "#888",
                formatter: () => t("Total"),
              },
              value: {
                show: true,
                fontSize: "22px",
                fontWeight: 700,
                formatter: (val: number) => `${val}`,
              },
              total: {
                show: true,
                label: t("Total"),
                fontSize: "14px",
                fontWeight: 500,
                color: "#888",
                formatter: (w: {
                  globals: { seriesTotals: number[] };
                }): string => {
                  return w.globals.seriesTotals
                    .reduce((a: number, b: number) => a + b, 0)
                    .toString();
                },
              },
            },
          },
        },
      },
      stroke: {
        width: 0,
      },
    },
  };
  return (
    <div>
      <p className="h4">{t("Reports")}</p>
      <SimpleApexChart
        type="donut"
        series={areaChartData.series}
        options={areaChartData.options}
        height={250}
      />
    </div>
  );
}
