import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function VisitsByCountry() {
  const { t } = useTranslation("common");
  const countryStats = [
    {
      id: 1,
      country: t("USA"),
      visitsFormatted: "68,258",
      percentageValue: 30,
      change: 4.67,
      changeType: "high",
      flag: "us",
    },
    {
      id: 2,
      country: t("UK"),
      visitsFormatted: "50,683",
      percentageValue: 20,
      change: 2.59,
      changeType: "high",
      flag: "uk",
    },
    {
      id: 3,
      country: t("Germany"),
      visitsFormatted: "62,053",
      percentageValue: 28,
      change: -1.18,
      changeType: "low",
      flag: "germany",
    },
    {
      id: 4,
      country: t("Spain"),
      visitsFormatted: "40,369",
      percentageValue: 18,
      change: -2.98,
      changeType: "low",
      flag: "spain-round",
    },
    {
      id: 5,
      country: t("China"),
      visitsFormatted: "3,258",
      percentageValue: 4,
      change: 1.22,
      changeType: "high",
      flag: "china-round",
    },
  ];

  return (
    <div>
      <div className="desSociacl mb-3">
        <p className="h4 my-1">{t("Visits_by_country")}</p>
        <p className="m-0 source-category">{t("Total_200_countries_visits")}</p>
      </div>
      {countryStats.map((country) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            key={country.id}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: 10 }}
              className="my-2"
            >
              <Image
                width={40}
                height={40}
                src={`/images/flags/${country.flag}.png`}
                alt={country.id.toString()}
                style={{ borderRadius: "50%" }}
              />
              <div className="">
                <div className="source-name">{country.country} </div>
                <div className="source-category">
                  <span>{country.percentageValue}%</span>
                  <span>{t("visits")}</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="source-name">{country.visitsFormatted} </div>
              <div className="source-category textRTL">
                <span className={`${country.changeType}`}>
                  {" "}
                  {country.change}{" "}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
