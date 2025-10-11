import React from "react";
import SimpleApexChart from "../Chart";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Button } from "@mui/material";

export default function ShippingOrders() {
  const { t } = useTranslation("common");
  const donutData = {
    series: [2658, 6687, 4348],
    options: {
      labels: [t("Truck"), t("Ship"), t("Flight")],
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
  const colChartData = {
    series: [
      {
        name: t("Shipping_orders"),
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
    <div className="row  gy-3 justify-content-between">
      <div className="col-12 d-flex p-3 justify-content-between container-chart row">
        <div className="p-2 d-flex flex-column justify-content-between col-lg-6 col-md-12 col-sm-12 borderRight">
          <div className="desSociacl ">
            <p className="numSocial my-1">
              <span className="dollar_sign">$</span>
              51,352 <span className="high backHigh"> +12.5%</span>
            </p>
            <p className="m-0 source-category">
              {t("Expected_Earning_of_this_year")}
            </p>
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
                <p className="m-0 p-description grey-des">{t("Truck")}</p>
                <p className="p-description m-0 darkText">$2,658</p>
              </div>
              <div
                style={{
                  minWidth: "120px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p className="m-0 p-description grey-des">{t("Ship")}</p>
                <p className="p-description m-0 darkText">$6,687</p>
              </div>
              <div
                style={{
                  minWidth: "120px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p className="m-0 p-description grey-des">{t("Flight")}</p>
                <p className="p-description m-0 darkText">$4,348</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 col-lg-6 col-md-12 col-sm-12">
          <div className="">
            <div className="desSociacl ">
              <p className="h4 my-1">{t("Shipping_orders")}</p>
              <p className="m-0 source-category">{t("This_Month")}</p>
            </div>
            <SimpleApexChart
              type="bar"
              series={colChartData.series}
              options={colChartData.options}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="col-12 d-lg-flex  quickGude p-3 justify-content-between container-chart">
        <div>
          <Image
            src="/images/Shipment/quick-gude.svg"
            alt="quickGuide"
            layout="intrinsic"
            width={300}
            height={300}
          />
        </div>
        <div className="d-flex flex-column justify-content-between ">
          <div className="">
            <p className="h2-landing darkText my-1">
              {" "}
              {t("Logistics_is_simple_but_not_easy")}
            </p>
            <p className="m-0 source-category">
              {t(
                "The_information_about_package_is_as_important_as_the_delivery_package_itself"
              )}
            </p>
          </div>
          <div className="">
            <Button
              variant="contained"
              sx={{ backgroundColor: "rgb(105 80 232 / 1)" }}
              href="/"
              className="mx-2 my-2"
            >
              {t("Start_Now")}
            </Button>
            <Button variant="contained" href="/" className="btn-2 mx-2 my-2">
              {t("Quick_Guide")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
