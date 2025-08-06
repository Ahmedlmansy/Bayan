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

export default function TopSeller() {
  const { t } = useTranslation("common");
  const TopSellerData = [
    {
      name: "Gage Paquette",
      userCode: "1",
      country: "United States",
      countryCode: "US",
      sales: "$350K",
      itemsSold: "13,440",
      flagIcon: "🇺🇸",
    },
    {
      name: "Lara Harvey",
      userCode: "2",
      country: "United Kingdom",
      countryCode: "UK",
      sales: "$148K",
      itemsSold: "10,240",
      flagIcon: "🇬🇧",
    },
    {
      name: "Evan Scott",
      userCode: "3",
      country: "Canada",
      countryCode: "germany",
      sales: "$148K",
      itemsSold: "10,240",
      flagIcon: "germany",
    },
    {
      name: "Benja Johnston",
      userCode: "4",
      country: "Australia",
      countryCode: "AU",
      sales: "$148K",
      itemsSold: "13,440",
      flagIcon: "🇦🇺",
    },
  ];
  return (
    <div>
      <p className="h4">{t("top_seller")}</p>
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell">{t("profile")}</TableCell>
              <TableCell className="table-head-cell">
                {t("Items_sold")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TopSellerData.map((seller) => (
              <TableRow key={seller.name}>
                <TableCell>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div className="selerIcon">
                      <Image
                        width={40}
                        height={40}
                        src={`/images/users/user-${seller.userCode}.png`}
                        alt={seller.name}
                      />
                      <span>
                        <Image
                          className="flagIcon"
                          width={18}
                          height={18}
                          src={`/images/flags/${seller.countryCode}.png`}
                          alt={seller.country}
                        />
                      </span>
                    </div>
                    <div>
                      <div className="source-name">{seller.sales}</div>
                      <div className="source-category">{seller.name}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="table-cell">{seller.itemsSold}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
