import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function YourCard() {
  const { t } = useTranslation("common");
  return (
    <div className="">
      <p className="h4">{t("Your_Card")}</p>
      <div className="p-3 text-center">
        <Image alt="" src={"/images/debit-card.png"} width={250} height={150} />
      </div>
      <div className="d-flex mt-3 gap-3 align-items-center">
        <div className="">
          <p className="m-0 fw-bold darkText p-description">
            {" "}
            {t("Receivers")} :
          </p>
        </div>
        <div className="d-flex">
          <Avatar alt="Remy Sharp" src="/images/Avatar/1.png" />
          <Avatar alt="Travis Howard" src="/images/Avatar/2.png" />
          <Avatar alt="Cindy Baker" src="/images/Avatar/3.png" />
          <Avatar alt="Remy Sharp" src="/images/Avatar/1.png" />
        </div>
      </div>
    </div>
  );
}
