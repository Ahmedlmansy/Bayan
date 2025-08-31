import { LinearProgress } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function YearlySales() {
  const { t } = useTranslation("common");

  return (
    <div className="cardEcommerce">
      <div className="p-description">
        <p className="h2-landing m-0 darkText">
          <span className="dollar_sign">$</span>
          51,352 <span className="backLow low">-1.25%</span>{" "}
        </p>
        <p className="m-0 p-description grey-des">{t("Yearly_Sales")}</p>
      </div>
      <div className="">
        <div className="d-flex justify-content-between align-items-center m-1">
          <p className="m-0 darkText p-description fw-medium ">
            $60,000 {t("to_Target")}
          </p>
          <p className="m-0 greyText  p-description"> 79%</p>
        </div>
        <LinearProgress
          variant="determinate"
          value={79}
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
  );
}
