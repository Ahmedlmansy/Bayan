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

export default function RecentOrders() {
  const { t } = useTranslation("common");
  const recentOrders = [
    {
      id: "#4zd8S",
      created: t("created_lang"),
      total: 678.5,
      status: t("pending"),
      className: "pending",
      paymentMethod: "PayPal",
    },
    {
      id: "#SPCTt",
      created: t("created_lang"),
      total: 165.58,
      status: t("shipped"),
      className: "shipped",
      paymentMethod: "Card",
    },
    {
      id: "#t04V-",
      created: t("created_lang"),
      total: 463.25,
      status: t("confirmed"),
      className: "confirmed",
      paymentMethod: "Skrill",
    },
    {
      id: "#K6jVV",
      created: t("created_lang"),
      total: 363.25,
      status: t("rejected"),
      className: "rejected",
      paymentMethod: "Visa Card",
    },
  ];

  return (
    <div>
      <p className="h4">{t("recentOrders")}</p>
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell">{t("method")}</TableCell>
              <TableCell className="table-head-cell">{t("created")}</TableCell>
              <TableCell className="table-head-cell">{t("total")}</TableCell>
              <TableCell className="table-head-cell">{t("status")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <Image
                      width={40}
                      height={40}
                      src={`/images/payment/${order.paymentMethod}.svg`}
                      alt={order.paymentMethod}
                    />
                    <div>
                      <div className="source-name">{order.id}</div>
                      <div className="source-category">
                        {" "}
                        {t("paidBy")} {order.paymentMethod}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="table-cell">{order.created}</TableCell>
                <TableCell className="table-cell">${order.total}</TableCell>
                <TableCell className="table-cell">
                  <span
                    className={`statusOrders ${order.className.toLowerCase()} p-description`}
                  >
                    {order.status}
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
