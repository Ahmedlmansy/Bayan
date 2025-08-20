import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function DealStatus() {
  const { t } = useTranslation("common");
  const deals = [
    {
      id: 1,
      avatar: "1",
      name: "Astole Banne",
      position: t("Sales_Manager"),
      company: "Absternet LLC",
      status: t("Deal_won"),
      classStatus: "Won-Lead",
      dealValue: "203.50K",
      dealValueNumeric: 203500,
      statusColor: "#00E396",
    },
    {
      id: 2,
      avatar: "2",
      name: "Lisa Bee",
      position: t("Sales_Manager"),
      company: "Nike",
      status: t("Stuck"),
      classStatus: "stuck",
      dealValue: "283.50K",
      dealValueNumeric: 283500,
      statusColor: "#FF4560",
    },
    {
      id: 3,
      avatar: "3",
      name: "Stuward Canne",
      position: t("Sales_Manager"),
      company: "Absternet LLC",
      status: t("Pending"),
      classStatus: "pending",
      dealValue: "203.50K",
      dealValueNumeric: 203500,
      statusColor: "#FEB019",
    },
  ];
  return (
    <div>
      <p className="h4">{t("Deal_Status")}</p>
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell">
                {t("Sales_Representative")}
              </TableCell>
              <TableCell className="table-head-cell">
                {t("Company_name")}
              </TableCell>
              <TableCell className="table-head-cell">{t("status")}</TableCell>
              <TableCell className="table-head-cell">
                {t("Deal_Value")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deals.map((deal) => (
              <TableRow key={deal.id}>
                <TableCell>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <Image
                      width={40}
                      height={40}
                      src={`/images/Avatar/${deal.avatar}.png`}
                      alt={deal.name}
                    />
                    <div>
                      <div className="source-name">{deal.name}</div>
                      <div className="source-category">{deal.position}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="table-cell">
                  <p className="m-0 darkText"> {deal.company} </p>
                </TableCell>
                <TableCell className="table-cell ">
                  <span className={`statusLeads ${deal.classStatus}`}>
                    {deal.status}
                  </span>
                </TableCell>
                <TableCell className="table-cell ">
                  {" "}
                  {deal.dealValue}{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
