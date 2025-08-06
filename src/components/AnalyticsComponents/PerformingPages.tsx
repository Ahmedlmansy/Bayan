import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";
export default function PerformingPages() {
  const { t } = useTranslation("common");
  const data = {
    pages: [
      {
        url: "https://bayan.com",
        clicks: 1369,
        clicksChange: { value: 165, trend: "low" }, // -165
        views: "50M",
      },
      {
        url: "https://bayan/analytic.com",
        clicks: 1003,
        clicksChange: { value: 528, trend: "high" }, // +528
        views: "28M",
      },
      {
        url: "https://bayan/ecommerce.com",
        clicks: 1987,
        clicksChange: { value: 898, trend: "high" },
        views: "63M",
      },
      {
        url: "https://bayan/crm.com",
        clicks: 1462,
        clicksChange: { value: 369, trend: "low" },
        views: "50M",
      },
      {
        url: "https://bayan/finance.com",
        clicks: 986,
        clicksChange: { value: 479, trend: "low" },
        views: "70M",
      },
      {
        url: "https://bayan/projectm.com",
        clicks: 1028,
        clicksChange: { value: 669, trend: "high" },
        views: "75M",
      },
      {
        url: "https://bayan/logistics.com",
        clicks: 369,
        clicksChange: { value: 215, trend: "high" },
        views: "25M",
      },
    ],
  };

  return (
    <div>
      <div>
        <p className="h3-landing m-0">{t("Top_performing_pages")}</p>
        <p className="m-0 source-category">{t("Counted_in_Millions")}</p>
      </div>
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell ">{t("pages")}</TableCell>
              <TableCell className="table-head-cell">{t("clicks")}</TableCell>
              <TableCell className="table-head-cell">{t("views")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.pages.map((row) => (
              <TableRow key={row.url}>
                <TableCell className="darkText table-head ">
                  {row.url}
                </TableCell>
                <TableCell className="table-head-cell">
                  <div className="table-head-cell  my-2 darkText">
                    <p className="m-0">
                      {row.clicks}{" "}
                      <span className={`${row.clicksChange.trend} m-2`}>
                        {row.clicksChange.trend === "high" ? "+" : "-"}
                        {row.clicksChange.value}{" "}
                      </span>
                    </p>
                  </div>
                </TableCell>
                <TableCell className="table-cell"> {row.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
