import React from "react";
import SimpleApexChart from "../Chart";
import { useTranslation } from "react-i18next";
import { LinearProgress } from "@mui/material";

export default function PublicView() {
  const { t } = useTranslation("common");
  const areaChartData = {
    series: [
      {
        name: t("Campaign_Sent"),
        data: [50, 70, 50, 90, 66, 44, 30],
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
          columnWidth: "18px",
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
  const donutData = {
    series: [2658, 6687, 4348],
    options: {
      labels: [t("Cloths"), t("Foods"), t("Others")],
      colors: ["#674FE4", "#495361", "#CCD0D6"],
      chart: {
        type: "donut",
        width: 100,
        height: 100,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
          },
        },
      },
      legend: {
        show: false,
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
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="p-description">
          <p className="h2-landing m-0 darkText">
            {/* <span className="dollar_sign">$</span> */}
            1,352 <span className="backHigh high">+4.6%</span>{" "}
          </p>
          <p className="m-0 p-description grey-des">{t("Campaign_Sent")}</p>
        </div>
        <div className="">
          <SimpleApexChart
            type="bar"
            series={areaChartData.series}
            options={areaChartData.options}
            height={120}
          />
        </div>
      </div>
      <div className="col-lg-4 centerPublicView">
        <div className="p-description">
          <p className="h2-landing m-0 darkText">
            <span className="dollar_sign">$</span>
            51,352 <span className="backHigh high">+12.5%</span>{" "}
          </p>
          <p className="m-0 p-description grey-des">{t("Average_Deals")}</p>
        </div>
        <div className="d-flex mt-3 justify-content-between">
          <div className="" style={{ width: "120px" }}>
            <SimpleApexChart
              type="donut"
              series={donutData.series}
              options={donutData.options}
              height={100}
            />
          </div>
          <div className="d-flex mt-2 flex-column gap-2">
            <div
              style={{
                minWidth: "120px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p className="m-0 p-description grey-des">{t("Cloths")}</p>
              <p className="p-description m-0 darkText">$2,658</p>
            </div>
            <div
              style={{
                minWidth: "120px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p className="m-0 p-description grey-des">{t("Foods")}</p>
              <p className="p-description m-0 darkText">$6,687</p>
            </div>
            <div
              style={{
                minWidth: "120px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p className="m-0 p-description grey-des">{t("Others")}</p>
              <p className="p-description m-0 darkText">$4,348</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="cardEcommerce">
          <div className="p-description">
            <p className="h2-landing m-0 darkText">
              <span className="dollar_sign">$</span>
              51,352 <span className="backLow low">-2.65%</span>{" "}
            </p>
            <p className="m-0 p-description grey-des">{t("Annual_Profit")}</p>
          </div>
          <div className="">
            <div className="d-flex justify-content-between align-items-center m-1">
              <p className="m-0 darkText p-description fw-medium ">
                $100,500 {t("To_Goal")}
              </p>
              <p className="m-0 greyText  p-description"> 75%</p>
            </div>
            <LinearProgress
              variant="determinate"
              value={75}
              sx={{
                height: 8,
                borderRadius: 5,
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#11B483",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
