"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import SimpleApexChart from "../Chart";

export default function DealType() {
  const { t } = useTranslation("common");
  const donutData = {
    series: [40, 20, 20],
    options: {
      labels: [t("Pending"), t("Won"), t("Loss")],
      colors: ["#674FE4", "#11B483", "#495361"],
      chart: {
        type: "donut",
        width: 100,
        height: 100,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "10px",
                fontWeight: 500,
                color: "#495361",
              },
              value: {
                show: true,
                fontSize: "14px",
                fontWeight: 700,
                color: "#495361",
                formatter: function (val: number) {
                  return val;
                },
              },
              total: {
                show: true,
                showAlways: true,
                label: t("Total"),
                fontSize: "12px",
                fontWeight: 600,
                color: "#495361",
                // formatter: function (w) {
                //   return w.globals.seriesTotals.reduce((a, b) => {
                //     return a + b;
                //   }, 0);
                // },
              },
            },
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "12px",
        fontWeight: 500,
        markers: {
          width: 12,
          height: 12,
          radius: 6,
        },
        itemMargin: {
          horizontal: 8,
          vertical: 4,
        },
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 150,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    value: {
                      fontSize: "12px",
                    },
                    total: {
                      fontSize: "10px",
                    },
                  },
                },
              },
            },
            legend: {
              position: "bottom",
              horizontalAlign: "center",
              fontSize: "11px",
              markers: {
                width: 10,
                height: 10,
                radius: 5,
              },
            },
          },
        },
      ],
    },
  };
  return (
    <div>
      <p className="h4">{t("Deal_type")}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="" style={{ width: "220px" }}>
          <SimpleApexChart
            type="donut"
            series={donutData.series}
            options={donutData.options}
            height={220}
          />
        </div>
      </div>
    </div>
  );
}
