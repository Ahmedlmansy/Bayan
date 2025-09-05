import React from "react";
import { useTranslation } from "react-i18next";
import SimpleApexChart from "../Chart";
import { LinearProgress } from "@mui/material";

export default function Audits() {
  const { t } = useTranslation("common");
  const areaChartData = {
    series: [80],
    options: {
      chart: {
        type: "radialBar",
        sparkline: {
          enabled: false,
        },
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "60%",
          },
          track: {
            background: "#ffffffff",
            strokeWidth: "100%",
          },
          dataLabels: {
            show: false,
          },
          startAngle: -180,
          endAngle: 135,
        },
      },
      colors: ["#6950e8"],
      stroke: {
        lineCap: "round",
      },
    },
  };
  return (
    <div>
      <p className="h4">{t("Audits")}</p>
      <SimpleApexChart
        type="radialBar"
        series={areaChartData.series}
        options={areaChartData.options}
        height={260}
      />
      <div className="">
        <p className="m-0 h4 darkText fw-medium ">50%</p>
        <span className="greyText  p-description">
          {t("Access_Grant")}
        </span>{" "}
        <LinearProgress
          variant="determinate"
          value={50}
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
  );
}
