import { LinearProgress } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function OrderThisMonth() {
  const { t } = useTranslation("common");

  return (
    <div className="cardEcommerce">
      <div className="p-description">
        <p className="h2-landing m-0 darkText">
          1,352 <span className="backLow low">-2.2%</span>{" "}
        </p>
        <p className="m-0 p-description grey-des">{t("Order_This_Month")}</p>
      </div>
      <div className="">
        <div className="d-flex justify-content-between align-items-center m-1">
          <p className="m-0 darkText p-description fw-medium ">
            1500 {t("To_Goal")}
          </p>
          <p className="m-0 greyText  p-description"> 75%</p>
        </div>
        <LinearProgress
          variant="determinate"
          value={70}
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
