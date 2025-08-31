import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function AllChannels() {
  const { t } = useTranslation("common");
  const platformStats = [
    {
      id: 1,
      name: t("Twitter"),
      category: t("Social_Media"),
      change: 4.67,
      changeFormatted: "↑ 4.67%",
      changeType: "high backHigh",
      icon: "twitter",
    },
    {
      id: 2,
      name: t("LinkedIn"),
      category: t("Social_Media"),
      change: -3.37,
      changeFormatted: "↓ 3.37%",
      changeType: "low backLow",
      icon: "linkedin",
    },
    {
      id: 3,
      name: t("Dribbble"),
      category: t("Community"),
      change: 2.19,
      changeFormatted: "↑ 2.19%",
      changeType: "high backHigh",
      icon: "dribble",
    },
    {
      id: 4,
      name: t("Facebook"),
      category: t("Social_Media"),
      change: -2.68,
      changeFormatted: "↓ 2.68%",
      changeType: "low backLow",
      icon: "facebook",
    },
    {
      id: 5,
      name: t("Instagram"),
      category: t("Community"),
      change: 3.33,
      changeFormatted: "↑ 3.33%",
      changeType: "high backHigh",
      icon: "instagram",
    },
  ];
  return (
    <div>
      <div className="desSociacl ">
        <p className="h4 my-1">{t("All_Channels")}</p>
        <p className="m-0 source-category">{t("Users_from_all_channels")}</p>
      </div>
      <div className="allShipment d-flex flex-column ">
        {platformStats.map((platform) => {
          return (
            <div
              className="d-flex justify-content-between align-items-center  my-2"
              key={platform.id}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: 10 }}
                className="my-2"
              >
                <Image
                  width={40}
                  height={40}
                  src={`/images/Social/${platform.icon}.svg`}
                  alt={platform.category}
                  //   style={{ borderRadius: "50%" }}
                />
                <div className="">
                  <div className="source-name">{platform.name} </div>
                  <div className="source-category">
                    <span>{platform.category}</span>
                  </div>
                </div>
              </div>
              <div className="">
                <div className={`${platform.changeType}`}>
                  {platform.changeFormatted}{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
