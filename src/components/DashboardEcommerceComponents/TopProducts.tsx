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

export default function TopProducts() {
  const { t } = useTranslation("common");
  const products = [
    {
      id: "FEIF_U",
      name: "Apple Watch",
      image: "apple-watch.png",
      price: "$1,799",
      priceNumeric: 1799,
      sold: "2,389",
      soldNumeric: 2389,
      sales: "$17,689",
      salesNumeric: 17689,
      category: "Electronics",
    },
    {
      id: "wkqubj",
      name: "Nike Shoes",
      image: "nike-shoes.png",
      price: "$739",
      priceNumeric: 739,
      sold: "6,698",
      soldNumeric: 6698,
      sales: "$62,397",
      salesNumeric: 62397,
      category: "Fashion",
    },
    {
      id: "Ou4fxo",
      name: "Ribbon Glass",
      image: "ribbon-glass.png",
      price: "$245",
      priceNumeric: 245,
      sold: "300",
      soldNumeric: 300,
      sales: "$7,658",
      salesNumeric: 7658,
      category: "Home Decor",
    },
    {
      id: "Hey3HG",
      name: "Headset",
      image: "headset.png",
      price: "$139",
      priceNumeric: 139,
      sold: "2,389",
      soldNumeric: 2389,
      sales: "$6,658",
      salesNumeric: 6658,
      category: "Electronics",
    },
  ];
  return (
    <div>
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell">
                {t("product_name")}
              </TableCell>
              <TableCell className="table-head-cell">{t("price")}</TableCell>
              <TableCell className="table-head-cell">{t("sold")}</TableCell>
              <TableCell className="table-head-cell">{t("sales")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <Image
                      width={40}
                      height={40}
                      src={`/images/products/${product.image}`}
                      alt={product.name}
                    />
                    <div>
                      <div className="source-name">{product.name}</div>
                      <div className="source-category">#{product.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="table-cell">{product.price}</TableCell>
                <TableCell className="table-cell">
                  {product.sold}
                  {t("pcs")}
                </TableCell>
                <TableCell className="table-cell">{product.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
