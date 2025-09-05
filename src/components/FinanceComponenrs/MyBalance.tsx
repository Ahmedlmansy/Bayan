import React from "react";
import { useTranslation } from "react-i18next";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button } from "@mui/material";
import Image from "next/image";
export default function MyBalance() {
  const { t } = useTranslation("common");
  return (
    <div className="p-3 d-flex justify-content-between myBalance ">
      <div className="d-flex gap-3 flex-column ">
        <div className="p-description">
          <p className="h2-landing m-0 darkText">
            <span className="dollar_sign">$</span>
            21,350.25
          </p>
          <p className="m-0 p-description grey-des">{t("My_Balance")}</p>
        </div>
        <div className="inComeOutCome d-flex gap-3">
          <div className="incom d-flex align-items-center gap-3">
            <div className="arrow">
              <ArrowUpwardIcon sx={{ color: "#0c9e80" }} />
            </div>
            <div className="detalis">
              <p className="m-0 darkText fw-bold">14,210.15</p>
              <p className="m-0 greyText">{t("Income")}</p>
            </div>
          </div>
          <div className="expance d-flex align-items-center gap-3">
            <div className="arrow">
              <ArrowDownwardIcon sx={{ color: "#eb194c" }} />
            </div>
            <div className="detalis">
              <p className="m-0 darkText fw-bold">14,210.15</p>
              <p className="m-0 greyText">{t("Expance")}</p>
            </div>
          </div>
        </div>
        <div className="">
          <Button
            variant="contained"
            sx={{ backgroundColor: "rgb(105 80 232 / 1)" }}
            href="/finance"
            className="mx-2 my-2"
          >
            {t("Send")}
          </Button>
          <Button
            variant="contained"
            href="/finance"
            className="btn-2 mx-2 my-2"
          >
            {t("Receive")}
          </Button>
        </div>
      </div>
      <div className="">
        <Image
          src={"/images/finance-balance.svg"}
          alt=""
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
