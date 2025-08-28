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

export default function ShipmentHistory() {
  const { t } = useTranslation("common");
  const orders = [
    {
      id: 1,
      productName: "apple-watch",
      productId: "2nwyIZT4NB",
      clientName: "Astole Banne",
      price: "$560.00",
      address: t("Rome_Italy"),
      status: t("Delivered"),
      classStatus: "shipped",
    },
    {
      id: 2,
      productName: "nike-shoes",
      productId: "AWlad2dGlu",
      clientName: "Talon Abela",
      price: "$250.50",
      address: t("Bangkok_Singapore"),
      status: t("Shipping"),
      classStatus: "confirmed",
    },
    {
      id: 3,
      productName: "ribbon-glass",
      productId: "4lmWEnfPKm",
      clientName: "Tofan Andy",
      price: "$150.25",
      address: t("Paris_France"),
      status: t("Delayed"),
      classStatus: "rejected",
    },
    {
      id: 4,
      productName: "apple-watch",
      productId: "AGFWcs-QXe",
      clientName: "Jhon Ables",
      price: "$799.25",
      address: t("New_York_USA"),
      status: t("Delivered"),
      classStatus: "shipped",
    },
  ];
  return (
    <div>
      <div className="desSociacl ">
        <p className="h4 my-1">{t("Shipment_History")}</p>
        <p className="m-0 source-category">{t("50+_Active_Shipments")}</p>
      </div>
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell">
                {t("name_&_id")}
              </TableCell>
              <TableCell className="table-head-cell">
                {t("client_name")}
              </TableCell>
              <TableCell className="table-head-cell">{t("address")}</TableCell>
              <TableCell className="table-head-cell">{t("status")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <Image
                      width={40}
                      height={40}
                      src={`/images/products/${order.productName}.png`}
                      alt={order.productName}
                    />
                    <div>
                      <div className="source-name">{order.productName}</div>
                      <div className="source-category">#{order.productId}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="table-cell">
                  <p className="m-0 source-name"> {order.clientName} </p>
                  <p className="m-0 greyText"> {order.price} </p>
                </TableCell>
                <TableCell className="table-cell ">{order.address}</TableCell>
                <TableCell className="table-cell ">
                  <span className={`${order.classStatus} statusOrders`}>
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
