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

export default function RecentLeads() {
  const { t } = useTranslation("common");
  const leads = [
    {
      id: 1,
      name: "Astole Banne",
      email: "astole@gmail.com",
      amount: "$25,360.00",
      amountNumeric: 25360,
      status: t("Deal_Won"),
      statusClass: "Won-Lead",
      avatar: "1",
    },
    {
      id: 2,
      name: "Taslon Abela",
      email: "taslon@gmail.com",
      amount: "$25,360.00",
      amountNumeric: 25360,
      status: t("Stuck"),
      statusClass: "stuck",
      avatar: "2",
    },
    {
      id: 3,
      name: "Tofan Andy",
      email: "tofan@gmail.com",
      amount: "$25,360.00",
      amountNumeric: 25360,
      status: t("Pending"),
      statusClass: "pending",
      avatar: "3",
    },
  ];
  return (
    <div>
      <p className="h4">{t("Deal_Status")}</p>
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell">{t("Name")}</TableCell>
              <TableCell className="table-head-cell">{t("Email")}</TableCell>
              <TableCell className="table-head-cell">{t("status")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <Image
                      width={40}
                      height={40}
                      src={`/images/Avatar/${lead.avatar}.png`}
                      alt={lead.name}
                    />
                    <div>
                      <div className="source-name">{lead.name}</div>
                      <div className="source-category">{lead.amount}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="table-cell">{lead.email}</TableCell>
                <TableCell className="table-cell ">
                  <span className={`statusLeads ${lead.statusClass}`}>
                    {lead.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
