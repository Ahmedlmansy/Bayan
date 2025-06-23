"use client";

import React from "react";
import UserStatsChart from "@/components/UserStatsChart";
import LiveOnlineUser from "@/components/LiveOnlineUser";
import { useTranslation } from "react-i18next";
import SocialTable from "@/components/SocialTable";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <div style={{ padding: "20px" }}>
      <div className="row gap-3">
        <div className="col-lg-8 col-md-12 col-sm-12 flex2 container-chart">
          <UserStatsChart />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 flex_one container-chart">
          <div className="p-description grey-des p-3">
            <p className="m-0">{t("live_online_user")}</p>
            <p className="h3-landing mb-3">382</p>
            <p>
              {t("page_views")} <span className="fw-bold">/{t("second")}</span>
            </p>
          </div>
          <LiveOnlineUser />
          <button className="btn  w-100 my-2"> View Details </button>
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 flex2 container-chart">
          <SocialTable />
        </div>
      </div>
    </div>
  );
}
