import React from "react";
import SimpleApexChart from "../Chart";
import { useTranslation } from "react-i18next";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EuroIcon from "@mui/icons-material/Euro";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
export default function CurrentCurrency() {
  const { t } = useTranslation("common");
  const dataCharts = {
    series: [33, 33, 33],
    options: {
      chart: {
        type: "donut",
      },
      labels: [t("USD"), t("EURO"), t("GBP")],
      colors: ["#00B894", "#6C5CE7", "#FDCB6E"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
            labels: {
              show: true,
              name: {
                show: false,
              },
              value: {
                show: false,
              },
              total: {
                show: true,
                label: "Total",
                fontSize: "16px",
                fontWeight: 600,
                color: "#000",
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
    <div className="d-flex">
      <div className="w-50 h-100" style={{ width: "50%" }}>
        <SimpleApexChart
          type="donut"
          series={dataCharts.series}
          options={dataCharts.options}
          height={200}
        />
      </div>
      <div className="w-50">
        <p className="h4"> {t("Current_Currency")} </p>
        <div className="d-flex justify-content-between align-items-center my-2">
          <div className="d-flex gap-2 align-items-center">
            <div className="arrow">
              <AttachMoneyIcon sx={{ color: "#00B894" }} />
            </div>
            <div className="detalis">
              <p className="m-0 darkText fw-bold">{t("USD")}</p>
            </div>
          </div>
          <div className="detalis">
            <p className="m-0 darkText fw-bold">94.65%</p>
            <span className="m-0 high backHigh">+2.5%</span>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center my-2">
          <div className="d-flex gap-2 align-items-center">
            <div className="arrow">
              <EuroIcon sx={{ color: "#6C5CE7" }} />
            </div>
            <div className="detalis">
              <p className="m-0 darkText fw-bold">{t("EURO")}</p>
            </div>
          </div>
          <div className="detalis">
            <p className="m-0 darkText fw-bold">26.37%</p>
            <span className="m-0 low backLow">-1.6%</span>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center my-2">
          <div className="d-flex gap-2 align-items-center">
            <div className="arrow">
              <CurrencyPoundIcon sx={{ color: "#FDCB6E" }} />
            </div>
            <div className="detalis">
              <p className="m-0 darkText fw-bold">{t("GBP")}</p>
            </div>
          </div>
          <div className="detalis">
            <p className="m-0 darkText fw-bold">55.24%</p>
            <span className="m-0 high backHigh">+3.23%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
