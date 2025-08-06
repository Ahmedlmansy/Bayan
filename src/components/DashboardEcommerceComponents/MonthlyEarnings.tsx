import { LinearProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";

export default function MonthlyEarnings() {
  const { t } = useTranslation("common");
  return (
    <div className="cardEcommerce">
      <div className="p-description">
        <p className="h2-landing m-0 darkText">
          <span className="dollar_sign">$</span>
          20,360 <span className="backLow low">-2.8%</span>{" "}
        </p>
        <p className="m-0 p-description grey-des">{t("Monthly_Earnings")}</p>
      </div>
      <div className="">
        <div className="d-flex justify-content-between align-items-center m-1">
          <p className="m-0 darkText  p-description fw-medium">
            {" "}
            $25,000 {t("To_Goal")}{" "}
          </p>
          <p className="m-0 greyText p-description"> 78%</p>
        </div>
        <LinearProgress
          variant="determinate"
          value={78}
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
