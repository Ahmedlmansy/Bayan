import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function RoleManagement() {
  const { t } = useTranslation("common");
  const logisticsServices = [
    {
      id: 1,
      title: t("Material_sourcing"),
      description: t("Material_sourcing_involves"),
    },
    {
      id: 2,
      title: t("Transportation"),
      description: t("The_best_carrier_based cost"),
    },
    {
      id: 3,
      title: t("Order_fulfillment"),
      description: t("The_process_comprise_order"),
    },
    {
      id: 4,
      title: t("Warehousing"),
      description: t("Planners_consider_warehouse"),
    },
    {
      id: 5,
      title: t("Supply_management"),
      description: t("Logistics_is_an_important_link"),
    },
  ];
  return (
    <div>
      <div className="desSociacl ">
        <p className="h4 my-1">{t("Role_Management")}</p>
        <p className="m-0 source-category">
          {t("The_important_5_logistics_role")}
        </p>
      </div>
      <div className="allShipment d-flex flex-column ">
        {logisticsServices.map((servis) => {
          return (
            <div
              style={{ display: "flex", alignItems: "center", gap: 10 }}
              key={servis.id}
              className="my-2"
            >
              <Image
                width={40}
                height={40}
                src={`/images/Shipment/${servis.id}.png`}
                alt={servis.id.toString()}
              />
              <div>
                <div className="source-name">{servis.title}</div>
                <div className="source-category">{servis.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
