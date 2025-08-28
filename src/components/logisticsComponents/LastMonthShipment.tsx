import React from "react";
import { useTranslation } from "react-i18next";
import SimpleApexChart from "../Chart";
import { Avatar, AvatarGroup, LinearProgress } from "@mui/material";

export default function LastMonthShipment() {
  const { t } = useTranslation("common");
  const areaChartData = {
    series: [
      {
        name: t("Last_Month_Shipment"),
        data: [
          { x: t("days.sunday"), y: 6 },
          { x: t("days.monday"), y: 15 },
          { x: t("days.tuesday"), y: 10 },
          { x: t("days.wednesday"), y: 17 },
          { x: t("days.thursday"), y: 12 },
          { x: t("days.friday"), y: 19 },
          { x: t("days.saturday"), y: 10 },
        ],
      },
    ],
    options: {
      colors: ["#fff"],
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
          show: false,
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
  const colChartData = {
    series: [
      {
        name: t("Total_Shipments"),
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
  return (
    <div className="LastMonthShipment ">
      <div className="chartShipment p-2">
        <p className="h3-landing text-light ">{t("Last_Month_Shipment")}</p>
        <SimpleApexChart
          type="area"
          series={areaChartData.series}
          options={areaChartData.options}
          height={150}
        />
      </div>
      <div className="row  px-4 dataShipment  gap-3">
        <div className="col-lg-6 flex_three cardShipment ">
          <div className="desSociacl ">
            <p className="numSocial my-1">
              $50K <span className="high backHigh"> +4.12%</span>
            </p>
            <p className="m-0 source-category">{t("Total_Online_Sales")}</p>
          </div>
          <div className="">
            <div className="d-flex justify-content-between align-items-center m-1">
              <p className="m-0 darkText p-description fw-medium ">
                $100K {t("To_Goal")}
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
                  backgroundColor: "#6950e8",
                },
              }}
            />
          </div>
        </div>
        <div className="col-lg-6 flex_three cardShipment ">
          <div className="desSociacl ">
            <p className="numSocial my-1">
              $12.65K <span className="high backHigh"> +2.19%</span>
            </p>
            <p className="m-0 source-category"> {t("Total_Shipments")}</p>
          </div>
          <div className="">
            <SimpleApexChart
              type="bar"
              series={colChartData.series}
              options={colChartData.options}
              height={100}
            />
          </div>
        </div>
        <div className="col-lg-6 flex_three cardShipment ">
          <div className="desSociacl ">
            <p className="numSocial my-1">
              $5K <span className="high backHigh"> +3.33%</span>
            </p>
            <p className="m-0 source-category">{t("Monthly_Earning")}</p>
          </div>
          <div className="">
            <SimpleApexChart
              type="bar"
              series={colChartData.series}
              options={colChartData.options}
              height={100}
            />
          </div>
        </div>
        <div className="col-lg-6  flex_three cardShipment ">
          <div className="desSociacl ">
            <p className="numSocial my-1">
              $568 <span className="low backLow"> -1.9%</span>
            </p>
            <p className="m-0 source-category">{t("New_Customer")}</p>
          </div>
          <div className="">
            <p className="m-0 p-description grey-des"> {t("Top_Customers")}</p>
            <AvatarGroup total={5} max={4}>
              <Avatar alt="Remy Sharp" src="/images/Avatar/1.png" />
              <Avatar alt="Travis Howard" src="/images/Avatar/2.png" />
              <Avatar alt="Agnes Walker" src="/images/Avatar/3.png" />
            </AvatarGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
