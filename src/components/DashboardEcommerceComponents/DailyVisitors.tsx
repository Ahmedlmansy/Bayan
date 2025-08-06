import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function DailyVisitors() {
  const { t } = useTranslation("common");

  return (
    <div className="cardEcommerce">
      <div className="p-description">
        <p className="h2-landing m-0 darkText">
          1,352 <span className="backHigh high">+2.1%</span>{" "}
        </p>
        <p className="m-0 p-description grey-des">{t("Daily_Visitors")}</p>
      </div>
      <div className="mt-3">
        <p className="m-0 p-description grey-des"> {t("Top_Visitors")}</p>
        <AvatarGroup total={5} max={4}>
          <Avatar alt="Remy Sharp" src="/images/Avatar/1.png" />
          <Avatar alt="Travis Howard" src="/images/Avatar/2.png" />
          <Avatar alt="Agnes Walker" src="/images/Avatar/3.png" />
        </AvatarGroup>
      </div>
    </div>
  );
}
