import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function OurTransportation() {
  const { t } = useTranslation("common");
  const transportationStats = [
    {
      id: 1,
      type: t("Ships"),
      icon: "Ships",
      count: 500,
      countLabel: t("Ships"),
      tons: 50368258,
      tonsFormatted: "5,03,68,258",
      tonsLabel: t("Tons"),
    },
    {
      id: 2,
      type: t("Planes"),
      icon: "Planes",
      count: 25,
      countLabel: t("Planes"),
      tons: 2336569,
      tonsFormatted: "23,36,569",
      tonsLabel: t("Tons"),
    },
    {
      id: 3,
      type: t("Trucks"),
      icon: "Trucks",
      count: 2500,
      countLabel: t("Trucks"),
      tons: 36566547,
      tonsFormatted: "3,65,66,547",
      tonsLabel: t("Tons"),
    },
    {
      id: 4,
      type: t("Trains"),
      icon: "Trains",
      count: 1000,
      countLabel: t("Trains"),
      tons: 10236482,
      tonsFormatted: "1,02,36,482",
      tonsLabel: t("Tons"),
    },
  ];
  return (
    <div>
      <div className="allShipment d-flex flex-column ">
        <div className="desSociacl mb-3">
          <p className="h4 my-1">{t("Our_Transportation")}</p>
          <p className="m-0 source-category">{t("Total_5,200_vehicles")}</p>
        </div>
        {transportationStats.map((transport) => {
          return (
            <div
              className="d-flex justify-content-between align-items-center"
              key={transport.id}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: 10 }}
                className="my-2"
              >
                <Image
                  width={40}
                  height={40}
                  src={`/images/Shipment/${transport.icon}.png`}
                  alt={transport.id.toString()}
                />
                <div className="">
                  <div className="source-name">{transport.type} </div>
                  <div className="source-category">
                    <span> {transport.count} </span>
                    <span> {transport.countLabel} </span>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="source-name">{transport.tonsFormatted} </div>
                <div className="source-category textRTL">
                  <span className=""> {transport.tonsLabel} </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
