"use client";

import React from "react";
import UserStatsChart from "@/components/UserStatsChart";
import LiveOnlineUser from "@/components/LiveOnlineUser";
import { useTranslation } from "react-i18next";
import SocialTable from "@/components/SocialTable";
import DonutSession from "@/components/DonutSession";
import CompletedGoals from "@/components/completedGoals";
import CompletedRates from "@/components/CompletedRates";
import CountryChart from "@/components/CountryChart";
import WorldMap from "@/components/MapComponet";
import PerformingPages from "@/components/PerformingPages";
import TopQueries from "@/components/TopQueries";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <div className="row gap-3">
      {/* 
        box 1
        */}
      <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
        <UserStatsChart />
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 p-3 container-chart flex_one ">
        <div className="p-description grey-des p-3">
          <p className="m-0">{t("live_online_user")}</p>
          <p className="h3-landing mb-3">382</p>
          <p>
            {t("page_views")}{" "}
            <span className="fw-bold dartText ">/{t("second")}</span>
          </p>
        </div>
        <LiveOnlineUser />
        <button className="btn  w-100 my-2"> View Details </button>
      </div>
      {/* 
        box 2
        */}
      <div className="col-lg-8 col-md-12 col-sm-12 p-3  container-chart flex_two">
        <SocialTable />
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 p-3  container-chart flex_one ">
        <DonutSession />
      </div>
      {/* 
        box 3
        */}
      <div className="col-lg-4 col-md-12 col-sm-12 p-0 flex_one ">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div className=" p-2 container-chart">
            <div className="desSociacl">
              <p className="numSocial mb-1 ">
                41,352
                <span className="high backHigh ms-2">+12.5%</span>
              </p>
              <p className="m-0 source-category">{t("Completed_Goals")}</p>
            </div>
            <CompletedGoals />
          </div>
          <div className=" p-2 container-chart">
            <div className="desSociacl">
              <p className="numSocial mb-1">
                55%
                <span className="low backLow ms-2 ">-15%</span>
              </p>
              <p className="m-0 source-category">{t("Complete_Rates")}</p>
            </div>
            <CompletedRates />
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-md-12 col-sm-12  p-3  container-chart flex_two">
        <div className="row">
          <div className="col-12">
            <p className="h3-landing m-0">{t("Sales_by_Country")}</p>
            <p className="m-0 source-category">{t("Top_Countries")}</p>
          </div>
          <div className="col-lg-6 col-md-12">
            <CountryChart />
          </div>
          <div className="col-lg-6 col-md-12">
            <WorldMap />
          </div>
        </div>
      </div>
      {/* 
        box 4
        */}
      <div className="col-lg-6 col-md-12 col-sm-12  p-3 container-chart flex_three ">
        <PerformingPages />
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12  p-3 container-chart flex_three ">
        <TopQueries />
      </div>
    </div>
  );
}
