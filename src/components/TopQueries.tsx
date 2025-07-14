import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
} from "@mui/material";
import { useTranslation } from "react-i18next";
export default function TopQueries() {
  const { t } = useTranslation("common");
  const data = {
    keywords: [
      {
        keyword: t("admin_dashboard"),
        clicks: 1369,
      },
      {
        keyword: t("top_admin_dashboard"),
        clicks: 1003,
      },
      {
        keyword: t("admin_panel"),
        clicks: 1987,
      },
      {
        keyword: t("analytics_dashboard"),
        clicks: 1462,
      },
      {
        keyword: t("minimal_dashboard"),
        clicks: 986,
      },
      {
        keyword: t("clean_ui_template"),
        clicks: 1028,
      },
      {
        keyword: t("logistics_dashboard"),
        clicks: 369,
      },
    ],
  };

  const maxClicks = 2000;
  function calculation(num: number) {
    return (num / maxClicks) * 100;
  }
  return (
    <div>
      <div>
        <p className="h3-landing m-0">{t("top_Queries")}</p>
        <p className="m-0 source-category">{t("Counted_in_Millions")}</p>
      </div>
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell">{t("keywords")}</TableCell>
              <TableCell className="table-head-cell">{t("clicks")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.keywords.map((row) => (
              <TableRow key={row.keyword}>
                <TableCell className="table-head ">{row.keyword}</TableCell>
                <TableCell className="table-head-cell">
                  <div className="table-head-cell d-flex dartText my-2 align-items-center gap-2">
                    <p className="col-4 m-0">{row.clicks}</p>
                    <LinearProgress
                      className="col-8"
                      variant="determinate"
                      value={calculation(row.clicks)}
                      sx={{
                        borderRadius: 5,
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#6950e8",
                        },
                      }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
